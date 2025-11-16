import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Simule une base de données d'utilisateurs
let users = [
  { id: '1', email: 'admin@aurion.com', password: 'admin123', name: 'Admin AURION', role: 'admin' },
  { id: '2', email: 'user@aurion.com', password: 'user123', name: 'User AURION', role: 'user' },
  { id: '3', email: 'erik@gmail.com', password: '1234', name: 'Erik', role: 'user' },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'Cet email est déjà utilisé' },
        { status: 409 }
      );
    }

    // Créer le nouvel utilisateur
    const newUser = {
      id: String(users.length + 1),
      email,
      password, // En production, hasher le mot de passe
      name,
      role: 'user' as const,
    };

    users.push(newUser);

    // Création du token
    const token = Buffer.from(`${newUser.id}:${newUser.email}:${Date.now()}`).toString('base64');
    const sessionData = {
      userId: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      token,
    };

    // Stockage dans les cookies
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
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
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

