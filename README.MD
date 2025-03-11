<a id="readme-top"></a>

<h1 align="center">Portfolio</h1>
<h2 align="center">Projet pour l'évaluation de compétences back-end du TP DWWM Bayonne</h2>

<h3 align="center">À propos<h3>

<div align="center">

C'est un projet qui a pour but d'évaluer mes compétences back-end dans le cadre de la formation  
"TP - Développeur Web et Web Mobile" à l'AFEC de Bayonne.

</div>

## Table des matières

- [Sujet](#sujet)
- [Fonctionnalité](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation, configuration et lancement du projet](#installation-configuration-et-lancement-du-projet)
- [Dépendances](#dépendances)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Test en tant qu'admin](#test-en-tant-quadmin)
- [Arborescence](#arborescence)
- [Tests et Visualisation](#tests-et-visualisation)
<!-- - [Demo](#demo)
  - [Backend - Render](#backend---render)
  - [Frontend - Vercel](#frontend---vercel) -->

## Sujet

Vous allez concevoir une application MERN permettant aux utilisateurs de gérer et afficher leurs compétences via un portfolio dynamique. L'application devra être sécurisée, responsive (mobile-first) et conforme aux exigences RGPD avec un système de gestion des cookies (Tarteaucitron.js) et un Captcha (Google reCAPTCHA ou Tarteaucitron) pour sécuriser l’authentification.

## Fonctionnalités

- Gestion des utilisateurs (création, affichage, modification, suppression, connexion)
- Gestion des compétences (création, affichage, modification, suppression)
- Authentification sécurisée (JWT & bcrypt)
- Gestion des rôles (user, admin) et protection de routes
<!-- - Logs pour suivre les actions des utilisateurs -->
<!-- - Formulaire de connexion avec Google reCAPTCHA
- Gestion des cookies avec Tarteaucitron.js -->

## Technologies utilisées

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=vscode,git,github,postman,nodejs,npm,javascript,express,mongodb,vite,react,bootstrap)](https://skillicons.dev)

</div>

## Prérequis

- npm :

  ```sh
  npm install npm@latest -g
  ```

  </br>

## Installation, configuration et lancement du projet

1.  Cloner le répertoire :

    ```sh
    git clone https://github.com/IbanL/CCP2.git
    ```

<br/>

2.  Installer les dépendances pour le backend et le frontend (sur deux terminaux différents):

    ```ini
    cd client
    npm i

    cd server
    npm i
    ```

    <br/>

3.  Créer un fichier `.env` dans le dossier backEnd avec les variables suivantes :

    ```ini
    PORT = le_port_sohaité (e.g 3000)

    # MongoDB
    MONGO_URI = votre_uri_mongodb

    # JsonWebToken
    JWT_SECRET = votre_phrase_secrète

    # Cloudinary
    CLOUDINARY_NAME = votre_cloud_name
    CLOUDINARY_KEY = votre_api_key
    CLOUDINARY_SECRET = votre_api_secret
    ```

<br/>

<!-- 4.  Créer un fichier `.env` dans le dossier frontEnd avec les variables suivantes :

    ```ini
    VITE_API_URL = votre_api_url

    # Google reCaptcha
    VIT_CAPTCHA_SITE_KEY= votre_captcha_site_key
    ``` -->

<br/>

5.  Lancer les serveurs backend et frontend (sur deux terminaux différents):

    ```ini
    cd server
    npm start

    cd client
    npm run dev
    ```

    <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dépendances

### Frontend

```ini
  "dependencies": {
    "axios": "^1.7.9",
    "js-cookie": "^3.0.5",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-router-dom": "^7.2.0"
  }
```

### Backend

```ini
  "dependencies": {
    "axios": "^1.8.1",
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.5.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "express-validator": "^7.2.1",
    "fs": "^0.0.1-security",
    "helmet": "^8.0.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.10.0",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.9"
  }
```

## Test admin

```ini
Email : admin@egg.fr

Mot de passe : admin
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Arborescence

```bash
📁projet CCP2
└── 📁server
    └── 📁config
        └── Cloudinary.js
        └── db.js
    └── 📁controllers
        └── skillsController.js
        └── userController.js
    └── 📁middlewares
        └── authMiddleware.js
        └── errorHandler.js
        └── validateRequest.js
    └── 📁models
        └── Settings.js
        └── Skills.js
        └── User.js
    └── 📁routes
        └── skillsRoutes.js
        └── usersRoutes.js
    └── 📁uploads
    └── 📁validations
        └── authValidation.js
        └── skillValidation.js
    └── .env
    └── app.js
    └── evaluation.odt
    └── package-lock.json
    └── package.json
└── 📁client
    └── 📁public
        └── vite.svg
    └── 📁src
        └── App.css
        └── App.jsx
        └── 📁assets
            └── react.svg
        └── 📁components
            └── Navbar.jsx
            └── SkillAdmin.jsx
            └── SkillForm.jsx
            └── Skills.jsx
        └── index.css
        └── main.jsx
        └── 📁pages
            └── Competences.jsx
            └── Home.jsx
            └── Login.jsx
            └── Register.jsx
        └── 📁utils
            └── ProtectedRoute.jsx
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── vite.config.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Tests et Visualisation

- **MongoDB Compass** : Visualisation des données
- **Postman** : Tests des routes API - [Collection postman](https://www.postman.com/iryan00/my-workspace/collection/3b0arvv/evalbackend?action=share&creator=6356318)

</br>
<div align="center">

| Method | Path                        | Desc                            |
| :----- | :-------------------------- | :------------------------------ |
| GET    | /api/users/                 | Afficher tous les utilisateurs  |
| POST   | /api/users/register         | Ajouter un utilisateur          |
| PUT    | /api/users/:id              | Modifier un utilisateur         |
| DEL    | /api/users/:id              | Supprimer un utilisateur        |
| POST   | /api/users/login            | Connecter un utilisateur        |
| GET    | /api/users/logout           | Déconnecter un utilisateur      |
| POST   | /api/skills/add             | Ajouter une compétence          |
| GET    | /api/skills/                | Afficher toutes les compétences |
| PUT    | /api/skills/update/:id      | Modifier une compétence         |
| DEL    | /api/skills/delete/:id      | Supprimer une compétence        |

</div>

<!-- ## Déploiement

### [ Backend - Render ](https://evalbackend-sp7c.onrender.com)

### [ Frontend - Vercel ](https://eval-back-end.vercel.app/) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>