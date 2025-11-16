"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function DiscordIntegrationPage() {
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
              <path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h12l-1-3h5l1 3c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intégration Discord</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Connectez AURION à Discord pour partager vos créations et collaborer avec votre communauté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-black/50 border-white/10 text-white relative">
            <GlowingEffect disabled={false} variant="default" proximity={50} spread={30} />
            <CardHeader>
              <CardTitle>Fonctionnalités</CardTitle>
              <CardDescription className="text-white/70">
                Ce que vous pouvez faire avec Discord
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-white/80">• Partage automatique de vos projets</p>
              <p className="text-white/80">• Commandes bot pour contrôler AURION</p>
              <p className="text-white/80">• Notifications dans vos serveurs</p>
              <p className="text-white/80">• Intégration avec vos bots existants</p>
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
              <p className="text-white/80">1. Ajoutez le bot AURION à votre serveur</p>
              <p className="text-white/80">2. Autorisez les permissions nécessaires</p>
              <p className="text-white/80">3. Configurez les channels de notification</p>
              <p className="text-white/80">4. Testez les commandes disponibles</p>
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

