"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function SlackIntegrationPage() {
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
              <path d="M5.2 15.7a2.6 2.6 0 1 1 0 5.2H2.6a2.6 2.6 0 1 1 0-5.2H5.2zm1.3-1.3a2.6 2.6 0 1 1 0-5.2h2.6v5.2H6.5zm6.5-6.5a2.6 2.6 0 1 1 5.2 0v2.6h-5.2V7.9zm-1.3 1.3a2.6 2.6 0 1 1 0 5.2H9.1V9.2h2.6zm8.4 0a2.6 2.6 0 1 1 0 5.2h-2.6V9.2h2.6zM15.7 5.2a2.6 2.6 0 1 1 0 5.2h-2.6V5.2h2.6zM9.2 2.6a2.6 2.6 0 1 1 0 5.2H6.6V2.6h2.6z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intégration Slack</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Connectez AURION à Slack pour recevoir des notifications et automatiser vos communications d'équipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-black/50 border-white/10 text-white relative">
            <GlowingEffect disabled={false} variant="default" proximity={50} spread={30} />
            <CardHeader>
              <CardTitle>Fonctionnalités</CardTitle>
              <CardDescription className="text-white/70">
                Ce que vous pouvez faire avec Slack
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-white/80">• Notifications en temps réel</p>
              <p className="text-white/80">• Commandes slash pour contrôler AURION</p>
              <p className="text-white/80">• Rapports automatiques dans vos channels</p>
              <p className="text-white/80">• Intégration avec vos workflows existants</p>
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
              <p className="text-white/80">1. Installez l'app AURION dans Slack</p>
              <p className="text-white/80">2. Autorisez l'accès à votre workspace</p>
              <p className="text-white/80">3. Configurez les channels de notification</p>
              <p className="text-white/80">4. Testez les commandes slash</p>
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

