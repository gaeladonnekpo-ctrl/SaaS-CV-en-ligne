# Portfolio & CV en Ligne Cinématographique — Adonnekpo Setondji Gaël Fourier

Vitrine digitale haute-fidélité ("1:1 Pixel Perfect") conçue pour **Adonnekpo Setondji Gaël Fourier**, Technicien en Microbiologie & Biotechnologie Alimentaire.

---

## 🚀 Accès Rapide & Visualisation Immédiate

Vous pouvez ouvrir le site de **deux façons** :

### 1. Immédiat sans installation (Zero Setup)
Double-cliquez simplement sur le fichier **[`index.html`](./index.html)** ou ouvrez-le dans votre navigateur préféré (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).
- Toutes les animations GSAP, la texture SVG, le radar SVG interactif, les micro-interactions et le sélecteur d'ambiances esthétiques fonctionnent **immédiatement**.

### 2. Via l'environnement moderne Vite + React 19 (si Node.js est installé)
```bash
npm install
npm run dev
```
Le serveur local se lancera alors sur `http://localhost:3000`.

---

## 🎨 Les 4 Directions Esthétiques Intégrées (Sélecteur en direct dans la Navbar)

Le site intègre le système de design complet conforme aux spécifications avec un commutateur interactif :

1. **Preset C — "Signal Brut" (Preset par défaut)** :
   - *Ambiance* : Précision laboratoire, interface de contrôle scientifique, netteté chirurgicale.
   - *Palette* : Bleu Signal `#2563EB`, Noir `#111111`, Fond Papier/Labo `#F5F3EE`.
   - *Typographie* : Space Grotesk (Titres), DM Serif Display Italique (Accents dramatiques), Space Mono (Données).

2. **Preset B — "Nocturne Prestige"** :
   - *Ambiance* : Sombre, élégant et raffiné.
   - *Palette* : Charbon `#0F0F13`, Or `#D4A843`, Crème `#F5F3EE`.
   - *Typographie* : Inter, Playfair Display Italique, JetBrains Mono.

3. **Preset A — "Architecte Minimal"** :
   - *Ambiance* : Épure professionnelle et aérée.
   - *Palette* : Encre `#1C1C1E`, Corail `#E8634A`, Fond Neige `#FAFAFA`.
   - *Typographie* : Plus Jakarta Sans, Cormorant Garamond Italique, IBM Plex Mono.

4. **Preset D — "Aura Digitale"** :
   - *Ambiance* : Créatif, visionnaire et high-tech néon.
   - *Palette* : Vide `#0A0A14`, Violet `#7B61FF`, Graphite `#18181B`.
   - *Typographie* : Sora, Instrument Serif Italique, Fira Code.

---

## 📐 Architecture des Composants Conforme

- **A. Signature Flottante (Navbar)** : Conteneur fixed en pilule avec morphing au scroll (verre dépoli `backdrop-blur-xl`), logo monogramme `GF`, liens d'ancrage fluides, commutateur de presets et bouton CTA.
- **B. Hero Section (100dvh)** : Photo/badge avec bordure accent, typographie massive, titre en serif dramatique, 3 statistiques en monospace (`3+ ANS D'EXPÉRIENCE · 6+ PROJETS & MISSIONS · COTONOU, BÉNIN`), et double CTA magnétique.
- **C. À Propos (Manifeste Personnel)** : Deux colonnes asymétriques avec séparateur vertical accent de 2px, présentation de l'expertise en contrôle qualité, microbiologie, antibiogrammes et résilience environnementale.
- **D. Expérience (La Timeline Vivante)** : Axe vertical avec points pulsants et cartes en alternance gauche/droite :
  - *LA.MI.T.A* — Laboratoire de Microbiologie et Technologie Alimentaire (Sept. 2023 - Janv. 2024)
  - *BRAVO TONUS JUS* — Production Assistant (Juin 2023 - Juil. 2023)
  - *LABOVERT* — Laboratoire Vétérinaire (Juil. 2022 - Mars 2023)
  - *Climathon Cotonou 2025* — Catalist Program Solutions Bas Carbone (Avril 2025)
  - *DAAD ALUMNI* — Technologies Innovantes & Climat (Sept. 2024)
- **E. Compétences (Le Tableau de Bord)** :
  - *Mode 1* : Grille de Maîtrise avec anneaux de progression circulaires SVG animés et compteurs.
  - *Mode 2* : Radar de Compétences SVG interactif avec polygone analytique normalisé.
  - *Tags Pondérés* : Logiciel R, Coloration de Gram, HACCP, Office, Marketing digital.
  - *Langues* : Fon (maternelle), Français (courant), Anglais (notions & technique).
- **F. Formation (Les Fondations)** : Cartes épurées pour le Diplôme de technicien en microbiologie (UAC), le Baccalauréat Scientifique et le Brevet Scientifique.
- **G. Contact (Le Pont)** : Liens directs email (`mailto:`), téléphone/WhatsApp direct, profil LinkedIn, formulaire de contact interactif et bouton de téléchargement du CV en format PDF.
- **H. Pied de Page** : Arrondi supérieur `rounded-t-[4rem]`, mention "Fait avec le vibe coding", et témoin d'activité vert pulsant en temps réel.

---

## 📄 Fichiers du Projet

```text
├── index.html                       # Version web autonome complète (exécutable immédiatement)
├── CV_Adonnekpo_Gael_Fourier.pdf    # Fichier PDF certifié pour le bouton "Télécharger CV"
├── package.json                     # Configuration npm avec React 19, Tailwind, GSAP, Lucide
├── vite.config.js                   # Configuration Vite
├── tailwind.config.js               # Configuration Tailwind étendue
├── src/
│   ├── App.jsx                      # Composant principal React 19 complet
│   ├── index.css                    # CSS global, filtres de bruit SVG, micro-interactions
│   └── main.jsx                     # Point d'entrée React 19
└── public/
    └── CV_Adonnekpo_Gael_Fourier.pdf # PDF accessible en environnement de développement
```

