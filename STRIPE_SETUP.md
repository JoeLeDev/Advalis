# Configuration Stripe Webhook

## 🔧 Développement local (recommandé)

### 1. Installer Stripe CLI

**macOS (Homebrew)** :
```bash
brew install stripe/stripe-cli/stripe
```

**Ou télécharger depuis** : https://stripe.com/docs/stripe-cli

### 2. Login Stripe CLI
```bash
stripe login
```
Cela ouvrira votre navigateur pour autoriser l'accès.

### 3. Forwarder les webhooks vers votre app locale
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

**Vous verrez un message comme** :
```
> Ready! Your webhook signing secret is whsec_xxxxxxxxxxxxxxxxxxxxx
```

### 4. Copier le secret dans .env
```env
STRIPE_WEBHOOK_SECRET="whsec_xxxxxxxxxxxxxxxxxxxxx"
```

### 5. Dans un autre terminal, lancer Next.js
```bash
npm run dev
```

**Voilà !** Le Stripe CLI forwardera automatiquement tous les événements Stripe vers votre app locale. Vous verrez les événements en temps réel dans les deux terminaux.

---

## 🌐 Production (déploiement)

### 1. Aller dans le Dashboard Stripe
https://dashboard.stripe.com/webhooks

### 2. Cliquer sur "Add endpoint"

### 3. Configurer l'endpoint
- **URL** : `https://votre-domaine.com/api/stripe/webhook`
- **Description** : Production webhook

### 4. Sélectionner les événements à écouter
Cochez les événements suivants :
- ✅ `checkout.session.completed`
- ✅ `customer.subscription.created`
- ✅ `customer.subscription.updated`
- ✅ `customer.subscription.deleted`
- ✅ `invoice.payment_succeeded`
- ✅ `invoice.payment_failed`
- ✅ `invoice.finalized` (optionnel)

### 5. Récupérer le webhook secret
Une fois l'endpoint créé, cliquez dessus et vous verrez :
```
Signing secret: whsec_xxxxxxxxxxxxxxxxxxxxx
```

Cliquez sur "Reveal" et copiez-le dans votre `.env` de production (sur Vercel, Render, etc.).

---

## 🧪 Tester les webhooks

### Avec Stripe CLI (en local)
```bash
# Déclencher un checkout.session.completed
stripe trigger checkout.session.completed

# Déclencher un payment_intent.succeeded
stripe trigger payment_intent.succeeded
```

### Manuellement
1. Créez un produit de test dans Stripe Dashboard
2. Allez sur votre page `/pricing`
3. Cliquez sur "Choisir" pour déclencher un checkout
4. Utilisez une carte de test : `4242 4242 4242 4242`
5. Les événements seront envoyés à votre webhook

---

## 🔍 Debug des webhooks

### Voir les logs Stripe CLI
Le terminal avec `stripe listen` affichera tous les événements reçus.

### Voir les logs dans Stripe Dashboard
https://dashboard.stripe.com/webhooks → Cliquez sur votre endpoint → Onglet "Events"

### Cartes de test Stripe
- ✅ Succès : `4242 4242 4242 4242`
- ❌ Échec : `4000 0000 0000 0002`
- 🔐 3D Secure : `4000 0025 0000 3155`

**Date d'expiration** : N'importe quelle date future (ex: 12/34)  
**CVC** : N'importe quel 3 chiffres (ex: 123)

---

## 📝 Notes importantes

1. **Le webhook secret est différent entre dev et prod** !
   - Local : `whsec_xxx` du Stripe CLI
   - Production : `whsec_yyy` du Dashboard

2. **Bien sécuriser le webhook** :
   - Le code vérifie déjà la signature avec `stripe.webhooks.constructEvent()`
   - Ne jamais exposer le `STRIPE_WEBHOOK_SECRET`

3. **Stripe CLI doit rester actif** :
   - Gardez le terminal avec `stripe listen` ouvert pendant le développement
   - Si vous le fermez, les webhooks ne seront plus forwardés

4. **Mode test vs live** :
   - Utilisez toujours les clés de test (`sk_test_...`) en développement
   - Les webhooks de test n'affectent pas vos vraies transactions

