"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GitHubIntegrationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#integrations" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Retour aux intégrations
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-lg mb-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-white w-12 h-12">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 
              0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
              1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.93 
              0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.167 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.045.137 
              3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.647.243 2.864.12 3.167.77.84 1.235 1.91 1.235 3.22 
              0 4.61-2.803 5.625-5.475 5.92.431.372.816 1.102.816 2.222 0 1.606-.015 2.9-.015 3.293 
              0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intégration GitHub</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Connectez AURION à GitHub pour synchroniser vos projets et automatiser vos workflows de développement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-black/50 border-white/10 text-white relative">
            <GlowingEffect disabled={false} variant="default" proximity={50} spread={30} />
            <CardHeader>
              <CardTitle>Fonctionnalités</CardTitle>
              <CardDescription className="text-white/70">
                Ce que vous pouvez faire avec GitHub
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-white/80">• Synchronisation automatique des repositories</p>
              <p className="text-white/80">• Déploiement automatique depuis GitHub</p>
              <p className="text-white/80">• Gestion des issues et pull requests</p>
              <p className="text-white/80">• Webhooks pour les événements GitHub</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 text-white relative">
            <GlowingEffect disabled={false} variant="default" proximity={50} spread={30} />
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription className="text-white/70">
                Étapes d'intégration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-white/80">1. Connectez votre compte GitHub</p>
              <p className="text-white/80">2. Autorisez AURION à accéder à vos repositories</p>
              <p className="text-white/80">3. Configurez vos préférences de synchronisation</p>
              <p className="text-white/80">4. Activez les webhooks pour l'automatisation</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild className="bg-white text-black hover:bg-white/90">
            <Link href="/register">Commencer l'intégration</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

