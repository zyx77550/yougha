# Guide de Contribution YouGha

## Comment ajouter de nouvelles fonctionnalités

1. **Créer une nouvelle branche**
```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

2. **Ajouter des composants**
- Créez un nouveau fichier par composant dans `src/components/`
- Utilisez le format `.tsx` pour les composants React
- Suivez les conventions de nommage existantes

3. **Ajouter des dépendances**
- Utilisez npm pour ajouter de nouvelles dépendances
```bash
npm install ma-nouvelle-dependance
```
- Mettez à jour DEPENDENCIES.md avec les nouvelles dépendances

4. **Tests**
- Ajoutez des tests pour vos nouvelles fonctionnalités
- Exécutez tous les tests avant de commiter
```bash
npm run test
```

5. **Commit et Push**
```bash
git add .
git commit -m "feat: description de la fonctionnalité"
git push origin feature/ma-nouvelle-fonctionnalite
```

6. **Créer une Pull Request**
- Créez une PR sur GitHub
- Attendez la review et l'approbation

## Bonnes pratiques

1. **Structure des composants**
- Un composant par fichier
- Utilisez les hooks React pour la logique
- Suivez les principes SOLID

2. **Style et formatage**
- Utilisez Tailwind CSS pour le style
- Suivez les conventions ESLint
- Utilisez Prettier pour le formatage

3. **Gestion d'état**
- Utilisez React Query pour les requêtes API
- Évitez les états globaux inutiles

4. **Documentation**
- Documentez les nouvelles fonctionnalités
- Mettez à jour les fichiers README si nécessaire

5. **Performance**
- Optimisez les rendus avec useMemo et useCallback
- Évitez les re-rendus inutiles

## Éviter les conflits

1. **Avant de commencer**
```bash
git pull origin main
npm install
```

2. **Pendant le développement**
- Faites des commits réguliers
- Gardez vos branches à jour avec main
```bash
git fetch origin main
git rebase origin/main
```

3. **Résolution des conflits**
- Utilisez un éditeur de code pour résoudre les conflits
- Testez après la résolution
- Demandez de l'aide si nécessaire

## Architecture du projet

```
yougha/
├── src/
│   ├── components/    # Composants React
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utilitaires
│   ├── pages/        # Pages/Routes
│   └── main.tsx      # Point d'entrée
```

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.