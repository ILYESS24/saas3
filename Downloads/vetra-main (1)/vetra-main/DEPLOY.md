# 🚀 Guide de Déploiement - AURION

## ✅ Code poussé vers GitHub

Le code a été poussé avec succès vers : `https://github.com/ILYESS24/saas3.git`

---

## 📦 Déploiement sur Vercel

### Option 1 : Déploiement automatique via GitHub (Recommandé)

1. **Aller sur [Vercel](https://vercel.com)**
   - Se connecter avec votre compte GitHub
   - Cliquer sur "Add New Project"

2. **Importer le projet**
   - Sélectionner le repository `ILYESS24/saas3`
   - Vercel détectera automatiquement Next.js

3. **Configurer les variables d'environnement**
   - Dans "Environment Variables", ajouter :
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://gvfuxlqvfvqdqhzjkyok.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2ZnV4bHF2ZnZxZHFoempreW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MTkyNzgsImV4cCI6MjA3ODk5NTI3OH0.y0f05lxJevY7wkS82FW2y2Kz4GbUauWzn0enH8-rDmE
     SUPABASE_SERVICE_ROLE_KEY=[Votre clé service role]
     DEEPSEEK_API_KEY=sk-491b1fc66cc14b3aaf40ea6511008bfa
     ```

4. **Déployer**
   - Cliquer sur "Deploy"
   - Vercel déploiera automatiquement à chaque push sur `main`

---

### Option 2 : Déploiement via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

---

## 🔧 Configuration Vercel

Le fichier `vercel.json` est déjà configuré avec :
- Framework : Next.js
- Build Command : `npm run build`
- Install Command : `npm install`
- Region : `iad1` (US East)

---

## 📝 Variables d'environnement requises

Assurez-vous d'ajouter ces variables dans Vercel :

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL de votre projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé anonyme Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé service role Supabase (pour les API routes) |
| `DEEPSEEK_API_KEY` | Clé API DeepSeek pour l'IA |

---

## ✅ Vérification post-déploiement

1. **Tester l'authentification**
   - Aller sur `/login` et `/register`
   - Vérifier que Supabase fonctionne

2. **Tester le dashboard**
   - Se connecter et vérifier `/dashboard`
   - Vérifier que les outils intégrés fonctionnent

3. **Tester le workflow builder**
   - Aller sur `/workflows`
   - Vérifier les animations et l'exécution

---

## 🔄 Déploiements automatiques

Une fois configuré, chaque push sur `main` déclenchera automatiquement un nouveau déploiement sur Vercel.

---

## 📚 Documentation

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Documentation](https://supabase.com/docs)

