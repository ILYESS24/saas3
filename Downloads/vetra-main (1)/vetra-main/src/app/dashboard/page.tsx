"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, Settings, Zap, Globe, Code, Image, Video, Sparkles } from "lucide-react";
import { getCurrentUser, logout, User as UserType } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push('/login');
        return;
      }
      setUser(currentUser);
    } catch (error) {
      console.error('Auth check error:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold">AURION Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm">{user.name}</span>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">Bienvenue, {user.name} !</h2>
          <p className="text-white/70 text-lg">
            Gérez vos projets, créez des sites web, des applications et bien plus encore.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-black/50 border-white/10 text-white hover:border-white/30 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <CardTitle>Créer un Site Web</CardTitle>
              </div>
              <CardDescription className="text-white/70">
                Créez un site web professionnel en quelques minutes avec l'IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 text-white hover:border-white/30 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Code className="w-5 h-5" />
                </div>
                <CardTitle>Créer une Application</CardTitle>
              </div>
              <CardDescription className="text-white/70">
                Développez des applications complètes avec notre éditeur de code IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 text-white hover:border-white/30 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Image className="w-5 h-5" />
                </div>
                <CardTitle>Générer des Images</CardTitle>
              </div>
              <CardDescription className="text-white/70">
                Créez des images professionnelles avec l'IA en quelques secondes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 text-white hover:border-white/30 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Video className="w-5 h-5" />
                </div>
                <CardTitle>Générer des Vidéos</CardTitle>
              </div>
              <CardDescription className="text-white/70">
                Produisez des vidéos époustouflantes avec l'IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 text-white hover:border-white/30 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
                <CardTitle>Agents IA</CardTitle>
              </div>
              <CardDescription className="text-white/70">
                Créez des agents IA personnalisés pour automatiser vos tâches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 text-white hover:border-white/30 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Settings className="w-5 h-5" />
                </div>
                <CardTitle>Paramètres</CardTitle>
              </div>
              <CardDescription className="text-white/70">
                Gérez vos préférences et votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                Ouvrir
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/50 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">0</CardTitle>
              <CardDescription className="text-white/70">Projets créés</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-black/50 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">0</CardTitle>
              <CardDescription className="text-white/70">Sites web actifs</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-black/50 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">0</CardTitle>
              <CardDescription className="text-white/70">Agents IA</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}

