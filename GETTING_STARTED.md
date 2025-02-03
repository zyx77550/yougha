# Guide de Démarrage YouGha

## Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn
- Git
- GPU compatible WebGPU (recommandé)

## Installation

1. Cloner le repository
```bash
git clone <votre-repo-url>
cd yougha
```

2. Installer les dépendances
```bash
npm install
```

## Développement

### Application Web
Lancer l'application en mode développement:
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:8080`

### Application Desktop (Electron)

1. Lancer en mode développement:
```bash
# Terminal 1: Lancer Vite
npm run dev

# Terminal 2: Lancer Electron
npm run electron-dev
```

2. Build pour production:
```bash
# Build l'application web
npm run build

# Build l'application Electron
npm run electron-build
```

Les builds Electron seront générés dans le dossier `release/` pour Windows (.exe), macOS (.dmg) et Linux (.AppImage)

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build l'application web
- `npm run preview` - Preview la build de production
- `npm run electron-dev` - Lance Electron en mode dev
- `npm run electron-build` - Build l'application desktop
- `npm run lint` - Lance ESLint
- `npm run test` - Lance les tests unitaires
- `npm run e2e` - Lance les tests E2E
- `npm run storybook` - Lance Storybook
- `npm run analyze` - Analyse la taille du bundle
- `npm run i18n` - Extrait les traductions

## Structure du Projet

```
yougha/
├── src/
│   ├── components/    # Composants React
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utilitaires
│   ├── pages/        # Pages/Routes
│   ├── agents/       # Agents IA
│   ├── models/       # Modèles ML
│   ├── i18n/         # Traductions
│   └── main.tsx      # Point d'entrée
├── electron/         # Code Electron
├── public/          # Assets statiques
└── ...
```

## Configuration des Agents IA

1. Configurez vos clés API dans le gestionnaire d'API (icône en haut à droite)
2. Vérifiez AI_REQUIREMENTS.md pour plus de détails
3. Redémarrez l'application

## Configuration des Tests

1. Tests Unitaires (Jest)
```bash
npm run test
```

2. Tests E2E (Cypress)
```bash
npm run e2e
```

## Internationalisation

1. Ajouter une nouvelle langue:
```bash
npm run i18n add <code-langue>
```

2. Extraire les traductions:
```bash
npm run i18n extract
```

## Performance

1. Analyser le bundle:
```bash
npm run analyze
```

2. Audit Lighthouse:
```bash
npm run lighthouse
```

## Troubleshooting

Si vous rencontrez des erreurs:

1. Vérifiez que Node.js est bien installé:
```bash
node --version
```

2. Nettoyez les dépendances:
```bash
rm -rf node_modules
npm install
```

3. Vérifiez les logs dans la console du navigateur

4. Vérifiez la compatibilité WebGPU:
```bash
chrome://gpu
```

Pour plus d'aide, consultez la documentation ou ouvrez une issue sur GitHub.

## Contribution

1. Créez une branche:
```bash
git checkout -b feature/ma-feature
```

2. Commitez vos changements:
```bash
git commit -m "feat: ajout de ma feature"
```

3. Poussez sur GitHub:
```bash
git push origin feature/ma-feature
```

## Documentation

- Storybook: `npm run storybook`
- API Docs: `/docs/api`
- Guide Contribution: CONTRIBUTING.md