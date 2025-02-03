# Guide de Démarrage YouGha

## Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn
- Git

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

## Structure du Projet

```
yougha/
├── src/
│   ├── components/    # Composants React
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utilitaires
│   ├── pages/        # Pages/Routes
│   └── main.tsx      # Point d'entrée
├── electron/         # Code Electron
├── public/          # Assets statiques
└── ...
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

Pour plus d'aide, consultez la documentation ou ouvrez une issue sur GitHub.