# 🔐 Système de Chiffrement et Confidentialité

## ✅ Implémentation Complète

### 1. **Chiffrement AES-256-GCM** (`src/lib/security/encryption.ts`)
- ✅ Chiffrement symétrique avec AES-256-GCM
- ✅ PBKDF2 pour dérivation de clé (100,000 itérations)
- ✅ Salt aléatoire pour chaque chiffrement
- ✅ Authentification avec GCM tags
- ✅ Hash sécurisé pour tokens (SHA-256)
- ✅ Masquage des données sensibles pour logs

**Fonctions disponibles :**
- `encrypt(data, key?)` - Chiffre une chaîne
- `decrypt(encryptedData, key?)` - Déchiffre une chaîne
- `encryptObject(obj, key?)` - Chiffre un objet JSON
- `decryptObject(encryptedData, key?)` - Déchiffre un objet JSON
- `hash(data, salt?)` - Hash irréversible (mots de passe)
- `verifyHash(data, hash, salt)` - Vérifie un hash
- `generateSecureToken(length)` - Génère un token sécurisé
- `hashToken(token)` - Hash un token pour stockage
- `maskSensitiveData(data)` - Masque les données pour logs

### 2. **Protection des Données** (`src/lib/security/data-protection.ts`)
- ✅ Chiffrement automatique des champs sensibles
- ✅ Déchiffrement automatique à la récupération
- ✅ Conformité RGPD (droit à l'oubli, portabilité)
- ✅ Anonymisation pour analytics
- ✅ Détection d'informations personnelles (PII)

**Champs automatiquement chiffrés :**
- `user`: email, phone, address, payment_info
- `project`: api_keys, secrets, credentials
- `content`: personal_data, sensitive_content
- `agent`: api_keys, secrets, credentials

**Fonctions RGPD :**
- `permanentlyDeleteUserData(userId)` - Suppression complète (droit à l'oubli)
- `exportUserData(userId)` - Export complet (droit à la portabilité)
- `anonymizeData(data)` - Anonymisation pour analytics
- `containsPII(data)` - Détection d'informations personnelles

### 3. **Gestionnaire de Secrets** (`src/lib/security/secrets-manager.ts`)
- ✅ Stockage sécurisé des API keys
- ✅ Génération de tokens API
- ✅ Vérification de tokens
- ✅ Révocation de tokens
- ✅ Jamais de stockage en clair

**Fonctions :**
- `storeSecret(userId, name, value, type)` - Stocke un secret chiffré
- `getSecret(userId, name)` - Récupère un secret déchiffré
- `deleteSecret(userId, name)` - Supprime un secret
- `generateAPIToken(userId, name)` - Génère un token API
- `verifyAPIToken(token)` - Vérifie un token
- `revokeAPIToken(userId, tokenId)` - Révoque un token
- `listAPITokens(userId)` - Liste les tokens (sans valeurs)

### 4. **API Secrets** (`/api/secrets`)
- ✅ CRUD complet pour les secrets
- ✅ Génération de tokens API
- ✅ Révocation de tokens
- ✅ Audit logging complet
- ✅ Rate limiting et validation

## 🔧 Configuration

### 1. Variables d'environnement

Ajouter dans `.env.local` :

```env
# Clé de chiffrement (32 bytes en hex, générer avec: openssl rand -hex 32)
ENCRYPTION_KEY=your-32-byte-hex-key-here

# Exemple de génération:
# openssl rand -hex 32
```

**⚠️ IMPORTANT :**
- Ne JAMAIS commit cette clé dans Git
- Stocker dans Vercel Environment Variables
- Utiliser une clé différente par environnement (dev, staging, prod)
- Sauvegarder la clé de manière sécurisée (password manager)

### 2. Exécuter le schéma SQL

```sql
-- Dans Supabase SQL Editor
\i supabase-encryption-schema.sql
```

Cela crée :
- Table `user_secrets` pour les secrets chiffrés
- Table `api_tokens` pour les tokens API
- Colonnes chiffrées dans les tables existantes
- RLS (Row Level Security) activé

### 3. Générer une clé de chiffrement

```bash
# Linux/Mac
openssl rand -hex 32

# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

## 📊 Utilisation

### Chiffrer des données avant stockage

```typescript
import { encrypt, encryptObject } from '@/lib/security/encryption';

// Chiffrer une chaîne
const encrypted = encrypt("sensitive data");

// Chiffrer un objet
const encryptedObj = encryptObject({ apiKey: "secret", token: "abc123" });
```

### Déchiffrer des données

```typescript
import { decrypt, decryptObject } from '@/lib/security/encryption';

// Déchiffrer une chaîne
const decrypted = decrypt(encrypted);

// Déchiffrer un objet
const decryptedObj = decryptObject(encryptedObj);
```

### Stocker un secret

```typescript
import { storeSecret, getSecret } from '@/lib/security/secrets-manager';

// Stocker
await storeSecret(userId, "openai_api_key", "sk-...", "api_key");

// Récupérer
const apiKey = await getSecret(userId, "openai_api_key");
```

### Générer un token API

```typescript
import { generateAPIToken, verifyAPIToken } from '@/lib/security/secrets-manager';

// Générer
const { token, tokenId } = await generateAPIToken(userId, "My API Token");
// ⚠️ Sauvegarder le token maintenant, il ne sera plus affiché

// Vérifier
const { valid, userId } = await verifyAPIToken(token);
```

### Protection automatique des données

```typescript
import { encryptBeforeSave, decryptAfterFetch } from '@/lib/security/data-protection';

// Avant insertion
const encrypted = await encryptBeforeSave('user', {
  email: "user@example.com",
  phone: "+33612345678",
});

// Après récupération
const decrypted = await decryptAfterFetch('user', encryptedData);
```

## 🔒 Sécurité

### Chiffrement
- **Algorithme**: AES-256-GCM (Galois/Counter Mode)
- **Dérivation de clé**: PBKDF2 avec 100,000 itérations
- **Salt**: 64 bytes aléatoire par chiffrement
- **IV**: 16 bytes aléatoire par chiffrement
- **Tag d'authentification**: 16 bytes (GCM)

### Tokens API
- **Génération**: 64 bytes aléatoires (512 bits)
- **Stockage**: Hash SHA-256 uniquement (jamais en clair)
- **Vérification**: Comparaison de hash avec timing-safe
- **Expiration**: Configurable (défaut: 1 an)

### Secrets
- **Stockage**: Chiffré avec AES-256-GCM
- **Accès**: RLS (Row Level Security) - users voient uniquement leurs secrets
- **Audit**: Toutes les opérations sont loggées

## 📈 Conformité RGPD

### Droit à l'oubli
```typescript
import { permanentlyDeleteUserData } from '@/lib/security/data-protection';

// Supprime TOUTES les données utilisateur de manière sécurisée
await permanentlyDeleteUserData(userId);
```

### Droit à la portabilité
```typescript
import { exportUserData } from '@/lib/security/data-protection';

// Exporte toutes les données utilisateur (déchiffrées)
const userData = await exportUserData(userId);
```

### Anonymisation
```typescript
import { anonymizeData } from '@/lib/security/data-protection';

// Anonymise pour analytics
const anonymized = anonymizeData(userData);
```

## 🚨 Bonnes Pratiques

1. **Ne JAMAIS stocker de secrets en clair**
2. **Utiliser `encryptBeforeSave()` pour les données sensibles**
3. **Utiliser `decryptAfterFetch()` après récupération**
4. **Générer des tokens avec `generateAPIToken()`**
5. **Vérifier les tokens avec `verifyAPIToken()`**
6. **Masquer les données dans les logs avec `maskSensitiveData()`**
7. **Détecter les PII avec `containsPII()` avant stockage**

## 🔍 Monitoring

### Vérifier les secrets stockés
```sql
SELECT name, type, created_at 
FROM user_secrets 
WHERE user_id = 'user-id-here';
```

### Vérifier les tokens API
```sql
SELECT name, created_at, expires_at, revoked, last_used_at
FROM api_tokens
WHERE user_id = 'user-id-here';
```

### Audit des opérations sur secrets
```sql
SELECT * FROM audit_logs
WHERE resource_type = 'secrets'
ORDER BY created_at DESC
LIMIT 100;
```

---

**Status**: ✅ Système de chiffrement complet implémenté
**Sécurité**: AES-256-GCM, PBKDF2, SHA-256
**Conformité**: RGPD ready

