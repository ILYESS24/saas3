"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function FigmaIntegrationPage() {
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
              <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM12 12a4 4 0 100 8 4 4 0 000-8zM4 4a4 4 0 100 8 4 4 0 000-8zM20 4a4 4 0 100 8 4 4 0 000-8zM12 20a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intégration Figma</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Importez vos designs Figma directement dans AURION et transformez-les en code fonctionnel automatiquement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-black/50 border-white/10 text-white relative">
            <GlowingEffect disabled={false} variant="default" proximity={50} spread={30} />
            <CardHeader>
              <CardTitle>Fonctionnalités</CardTitle>
              <CardDescription className="text-white/70">
                Ce que vous pouvez faire avec Figma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-white/80">• Import de designs Figma</p>
              <p className="text-white/80">• Conversion automatique en code</p>
              <p className="text-white/80">• Synchronisation des composants</p>
              <p className="text-white/80">• Mise à jour automatique des designs</p>
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
              <p className="text-white/80">1. Installez le plugin AURION dans Figma</p>
              <p className="text-white/80">2. Connectez votre compte AURION</p>
              <p className="text-white/80">3. Sélectionnez vos fichiers à synchroniser</p>
              <p className="text-white/80">4. Configurez les paramètres d'export</p>
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

