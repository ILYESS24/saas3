# Variables d'Environnement

## 🔐 Configuration Requise

### Variables Obligatoires

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Encryption (Générer avec: openssl rand -hex 32)
ENCRYPTION_KEY=your-32-byte-hex-encryption-key-here

# DeepSeek AI
DEEPSEEK_API_KEY=sk-your-deepseek-api-key
```

### Variables Optionnelles

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

# Stripe Price IDs
STRIPE_PRICE_ID_BASIC=price_your-basic-price-id
STRIPE_PRICE_ID_STARTER=price_your-starter-price-id
STRIPE_PRICE_ID_PRO=price_your-pro-price-id

# Application URL
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app

# External Tools (Optional)
NEXT_PUBLIC_OPEN_WEBUI_URL=https://your-open-webui-url.com
NEXT_PUBLIC_MOCHI_URL=https://your-mochi-url.com
NEXT_PUBLIC_OPEN_SORA_URL=https://your-open-sora-url.com
NEXT_PUBLIC_WAN_URL=https://your-wan-url.com

# OpenAI (Optional - fallback)
OPENAI_API_KEY=sk-your-openai-api-key

# Replicate (Optional - for image/video generation)
REPLICATE_API_TOKEN=your-replicate-token
```

## 🔑 Génération de la Clé de Chiffrement

```bash
# Linux/Mac
openssl rand -hex 32

# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

**⚠️ IMPORTANT**: Ne JAMAIS commit cette clé dans Git !

