import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/supabase-server-api';
import { aiOrchestrator } from '@/lib/ai/orchestrator';
import { autonomousGenerator } from '@/lib/ai/autonomous-generator';
import { canGenerateAI, trackAIGeneration, canMakeAPICall, trackAPICall } from '@/lib/subscription-checker';

/**
 * POST /api/ai/generate
 * Génération IA unifiée (texte, code, image, vidéo)
 */
export async function POST(request: NextRequest) {
  try {
    const { user, supabase } = await getAuthenticatedUser(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { task, prompt, model, options, type } = body;

    if (!task || !prompt) {
      return NextResponse.json(
        { error: 'Task and prompt are required' },
        { status: 400 }
      );
    }

    // Vérifier les limites d'abonnement pour les générations AI
    let aiType: 'text' | 'image' | 'video' = 'text';
    if (task === 'image' || type === 'image') aiType = 'image';
    if (task === 'video' || type === 'video') aiType = 'video';

    const limitCheck = await canGenerateAI(user.id, aiType);
    if (!limitCheck.allowed) {
      return NextResponse.json(
        { 
          error: limitCheck.message || 'Limite de génération IA atteinte',
          code: 'SUBSCRIPTION_LIMIT_EXCEEDED'
        },
        { status: 403 }
      );
    }

    // Vérifier les limites d'appels API
    const apiLimitCheck = await canMakeAPICall(user.id);
    if (!apiLimitCheck.allowed) {
      return NextResponse.json(
        { 
          error: apiLimitCheck.message || 'Limite d\'appels API atteinte',
          code: 'SUBSCRIPTION_LIMIT_EXCEEDED'
        },
        { status: 403 }
      );
    }

    // Génération autonome de projet complet
    if (type === 'autonomous' && task === 'project') {
      const projectDescription = {
        name: body.name || 'Generated Project',
        description: prompt,
        type: body.projectType || 'saas',
        features: body.features || [],
        techStack: body.techStack || {},
      };

      const project = await autonomousGenerator.generateProject(projectDescription);

      // Enregistrer l'activité
      await (supabase as any)
        .from('realtime_activity')
        .insert({
          user_id: user.id,
          tool_name: 'ai_orchestrator',
          activity_type: 'project_generated',
          activity_data: {
            projectName: projectDescription.name,
            type: projectDescription.type,
          },
        });

      return NextResponse.json({
        success: true,
        project,
        type: 'autonomous',
      });
    }

    // Génération standard (texte, code, image, vidéo)
    const response = await aiOrchestrator.process({
      task,
      prompt,
      model,
      options,
    });

    // Enregistrer la génération AI et l'appel API
    await trackAIGeneration(user.id, aiType, {
      task,
      model: response.model,
      tokens: response.tokens,
      cost: response.cost,
    });
    await trackAPICall(user.id, '/api/ai/generate');

    // Enregistrer l'activité
    await (supabase as any)
      .from('realtime_activity')
      .insert({
        user_id: user.id,
        tool_name: 'ai_orchestrator',
        activity_type: `ai_${task}_generated`,
        activity_data: {
          task,
          model: response.model,
          tokens: response.tokens,
          cost: response.cost,
        },
      });

    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error: any) {
    console.error('AI generation error:', error);
    return NextResponse.json(
      { error: error.message || 'AI generation failed' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/ai/generate
 * Liste les modèles disponibles
 */
export async function GET() {
  return NextResponse.json({
    models: [
      {
        id: 'deepseek',
        name: 'DeepSeek',
        tasks: ['text', 'code', 'chat'],
        cost: '$0.14 per 1M tokens',
      },
      {
        id: 'openai',
        name: 'OpenAI GPT-4',
        tasks: ['text', 'code', 'chat'],
        cost: '$30 per 1M tokens',
      },
      {
        id: 'ollama',
        name: 'Ollama (Local)',
        tasks: ['text', 'code', 'chat'],
        cost: 'Free (local)',
      },
      {
        id: 'replicate',
        name: 'Replicate',
        tasks: ['image', 'video'],
        cost: 'Variable',
      },
    ],
    tasks: ['text', 'code', 'image', 'video', 'chat', 'project'],
  });
}

