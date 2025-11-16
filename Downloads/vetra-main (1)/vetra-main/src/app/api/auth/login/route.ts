import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Simule une base de données d'utilisateurs
const users = [
  { id: '1', email: 'admin@aurion.com', password: 'admin123', name: 'Admin AURION', role: 'admin' },
  { id: '2', email: 'user@aurion.com', password: 'user123', name: 'User AURION', role: 'user' },
  { id: '3', email: 'erik@gmail.com', password: '1234', name: 'Erik', role: 'user' },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    // Recherche de l'utilisateur
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }

    // Création du token (simplifié - en production utiliser JWT)
    const token = Buffer.from(`${user.id}:${user.email}:${Date.now()}`).toString('base64');
    const sessionData = {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      token,
    };

    // Stockage dans les cookies
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });

    cookieStore.set('user-data', JSON.stringify(sessionData), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

