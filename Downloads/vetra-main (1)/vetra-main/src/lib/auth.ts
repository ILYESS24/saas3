'use client';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export async function login(email: string, password: string) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Erreur de connexion');
  }

  return data;
}

export async function register(email: string, password: string, name: string) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Erreur d\'inscription');
  }

  return data;
}

export async function logout() {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Erreur de déconnexion');
  }

  return data;
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const response = await fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
}

