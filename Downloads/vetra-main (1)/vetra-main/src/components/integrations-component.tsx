import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

export default function IntegrationsSection() {
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl text-white">
              Intégrations Puissantes
            </h2>
            <p className="text-white/70 mt-6">
              Connectez AURION à vos outils préférés. Intégration en 5 minutes.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="Vercel"
              description="Deploy and scale your applications globally."
              link="/integrations/vercel">
              <VercelLogo />
            </IntegrationCard>

            <IntegrationCard
              title="OpenAI"
              description="Advanced AI models for intelligent applications."
              link="/integrations/openai">
              <OpenAILogo />
            </IntegrationCard>

            <IntegrationCard
              title="DeepSeek"
              description="Next-generation AI coding assistant."
              link="/integrations/deepseek">
              <DeepSeekLogo />
            </IntegrationCard>

            <IntegrationCard
              title="Anthropic"
              description="Claude AI for enterprise-grade intelligence."
              link="/integrations/anthropic">
              <AnthropicLogo />
            </IntegrationCard>

            <IntegrationCard
              title="GitHub"
              description="Version control and collaboration platform."
              link="/integrations/github">
              <GitHubLogo />
            </IntegrationCard>

            <IntegrationCard
              title="Stripe"
              description="Payment processing and financial infrastructure."
              link="/integrations/stripe">
              <StripeLogo />
            </IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  )
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = '#',
}: {
  title: string
  description: string
  children: React.ReactNode
  link?: string
}) => {
  return (
    <Card className="p-6 bg-black/50 border-white/10 text-white relative">
      <GlowingEffect disabled={false} variant="default" proximity={50} spread={30} />
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium text-white">{title}</h3>
          <p className="text-white/70 line-clamp-2 text-sm">{description}</p>
        </div>

        <div className="flex gap-3 border-t border-dashed border-white/10 pt-6">
          <Button asChild variant="secondary" size="sm" className="gap-1 pr-2 shadow-none bg-white/10 hover:bg-white/20 text-white border-white/20">
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

// --- Logos (inline SVG) ---
const VercelLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
)

const OpenAILogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-1.32l-2.24-3.879a5.99 5.99 0 0 0-1.32-.516l-3.88-2.24a5.985 5.985 0 0 0-1.32-.516L11.179.282a5.985 5.985 0 0 0-1.32-.516L6.98.282a5.99 5.99 0 0 0-1.32.516L1.78 3.038a5.99 5.99 0 0 0-.516 1.32L.282 9.821a5.985 5.985 0 0 0-.516 1.32v3.718c0 .458.177.9.516 1.32l2.24 3.879c.339.42.782.697 1.32.516l3.88 2.24c.458.177.9.177 1.32.516l3.879 2.24c.42.339.862.516 1.32.516h3.718c.458 0 .9-.177 1.32-.516l3.879-2.24c.42-.339.697-.782.516-1.32l2.24-3.88c.177-.458.177-.9.516-1.32V11.14a5.985 5.985 0 0 0-.516-1.32zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" />
  </svg>
)

const DeepSeekLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const AnthropicLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 
    0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
    1.204.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.93 
    0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.167 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.004 2.045.137 
    3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.647.243 2.864.12 3.167.77.84 1.235 1.91 1.235 3.22 
    0 4.61-2.803 5.625-5.475 5.92.431.372.816 1.102.816 2.222 0 1.606-.015 2.9-.015 3.293 
    0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const StripeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 3.376.85 3.376 1.888 0 .98-.49 1.967-1.92 2.826zm-1.91 4.177c-2.172-.806-3.355-1.426-3.355-2.408 0-.83.683-1.305 1.901-1.305 2.227 0 3.376.85 3.376 1.888 0 .98-.49 1.967-1.92 2.826zM24 10.314v-3.09h-2.18v3.09c0 1.305.49 1.888 1.901 1.888.49 0 .98-.163 1.279-.49v-1.888c-.49.163-.98.163-1.279.163-.49 0-.831-.163-.831-.653 0-.49.49-.653 1.279-.98l1.279-.49c1.305-.49 1.901-1.142 1.901-2.245 0-1.305-.98-2.245-2.18-2.245-1.305 0-2.18.98-2.18 2.245v3.09h2.18v-3.09c0-1.305-.49-1.888-1.901-1.888-.49 0-.98.163-1.279.49v1.888c.49-.163.98-.163 1.279-.163.49 0 .831.163.831.653 0 .49-.49.653-1.279.98l-1.279.49c-1.305.49-1.901 1.142-1.901 2.245 0 1.305.98 2.245 2.18 2.245 1.305 0 2.18-.98 2.18-2.245z" />
  </svg>
)
