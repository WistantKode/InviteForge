# Plan de Développement : InviteForge

Ce document détaille les étapes pour construire une application Next.js fonctionnelle, scalable et entièrement typée pour la génération de billets d'invitation.

---

### Étape 1 : Initialisation et Configuration du Projet (Chore)

1.  **Initialiser le projet Next.js** :
    - Utiliser `create-next-app` avec TypeScript, Tailwind CSS, et ESLint. (Déjà fait)

2.  **Configuration de la Qualité du Code** :
    - Configurer Prettier pour un formatage de code cohérent.
    - Mettre en place des alias de chemin (`@/*`) dans `tsconfig.json` pour des imports plus propres et maintenables.

3.  **Adopter la structure `src`** :
    - Créer un répertoire `src` et y déplacer le contenu de l'application (`app`, futurs `components`, etc.).
    - Mettre à jour les configurations (`tsconfig.json`) en conséquence.

---

### Étape 2 : Architecture et Structure des Dossiers (Refactor)

Pour garantir la scalabilité, nous adopterons une structure de dossiers claire :

-   `src/app/` : Cœur de l'application (routage, pages, layouts) avec l'App Router.
-   `src/components/` :
    -   `ui/` : Composants d'interface génériques (ex: Button, Input) fournis par `shadcn/ui`.
    -   `shared/` : Composants partagés spécifiques à l'application (ex: `InvitationCard`, `Header`).
-   `src/lib/` : Fonctions utilitaires, helpers, et constantes (ex: `utils.ts`).
-   `src/hooks/` : Hooks React personnalisés.
-   `src/types/` : Définitions TypeScript globales (interfaces, types).
-   `src/styles/` : Fichiers de styles globaux.

*Cette structure sépare les responsabilités, ce qui facilite la maintenance et l'ajout de nouvelles fonctionnalités.*

---

### Étape 3 : UI et Styling (Feat/Style)

1.  **Intégrer `shadcn/ui`** :
    - C'est une collection de composants réutilisables et accessibles basés sur Tailwind CSS.
    - Initialiser `shadcn/ui` dans le projet.

2.  **Définir le Thème de Base** :
    - Configurer les couleurs, la typographie et les espacements dans `tailwind.config.ts` pour correspondre à l'identité visuelle de l'événement.

---

### Étape 4 : Feature - Formulaire de Création (Feat)

1.  **Créer la Page Principale (`/`)** :
    - Elle contiendra un formulaire pour saisir les informations de l'invitation (nom du parrainé, nom du parrain, date, lieu, etc.).

2.  **Gérer le Formulaire avec `React Hook Form`** :
    - Pour une gestion robuste de l'état du formulaire, la validation et la soumission.

3.  **Valider les Données avec `Zod`** :
    - Créer un schéma de validation pour garantir que les données saisies sont correctes et `type-safe` avant tout traitement.

---

### Étape 5 : Feature - Prévisualisation et Génération du Billet (Feat)

1.  **Composant de Prévisualisation en Temps Réel** :
    - Afficher un aperçu de la carte d'invitation qui se met à jour dynamiquement à mesure que l'utilisateur remplit le formulaire.

2.  **Logique de Génération d'Image** :
    - Utiliser une bibliothèque comme `html-to-image` pour convertir le composant de prévisualisation (HTML/CSS) en une image (PNG/JPEG).
    - La génération se fera côté client pour plus de simplicité au démarrage.

3.  **Fonction de Téléchargement** :
    - Ajouter un bouton pour permettre à l'utilisateur de télécharger le billet généré.

---

### Étape 6 : Tests et Fiabilité (Test)

1.  **Configurer l'Environnement de Test** :
    - Mettre en place Jest et React Testing Library.

2.  **Écrire des Tests Unitaires** :
    - Pour les fonctions critiques (ex: formatage de date, validation de schéma Zod).

3.  **Écrire des Tests d'Intégration** :
    - Pour le flux principal : remplir le formulaire -> vérifier la mise à jour de l'aperçu -> simuler le téléchargement.

---

### Étape 7 : Déploiement (CI/CD)

1.  **Choisir une Plateforme** :
    - Vercel est la solution recommandée pour les projets Next.js pour son intégration parfaite.

2.  **Mettre en place l'Intégration Continue** :
    - Configurer un workflow GitHub Actions pour lancer les tests à chaque `push` ou `pull request`.

---

Ce plan nous servira de feuille de route. Nous commencerons par l'étape 1.
