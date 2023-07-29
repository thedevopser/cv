# 📄 Mon CV en ligne

Ce projet est un CV en ligne construit avec Vue.js 3 et Tailwind CSS.

Il représente mon parcours ainsi que mon savoir faire.

## 🚀 Configuration du projet

Pour commencer à travailler sur ce projet, clonez le dépôt et installez les dépendances avec npm :

```bash
git clone <url-du-dépôt>
cd <nom-du-dossier>
npm install

```

## 📂 Structure du projet

Ce projet est organisé en composants et vues, conformément aux meilleures pratiques de Vue.js. 

Les composants se trouvent dans le dossier *src/components* et les vues dans le dossier *src/views*.

Le projet utilise Vue Router pour la navigation entre les vues. 

La configuration de Vue Router se trouve dans le fichier *src/router/index.js*.

La barre de navigation et le pied de page sont des composants globaux qui sont utilisés dans App.vue. 

Le contenu de chaque page est rendu dans une balise *<router-view>* entre ces deux composants.

## 🌟 Utilisation de FontAwesome

Ce projet utilise FontAwesome pour les icônes. 

Les icônes sont importées et ajoutées à la bibliothèque FontAwesome dans le fichier main.js, puis utilisées dans les composants avec la balise *<font-awesome-icon>*.

## 💻 Développement

Pour lancer le serveur de développement, exécutez la commande suivante :

```bash
npm run serve
```

Le serveur de développement tournera sur http://localhost:8080.

## 🏗️ Production

Pour construire le projet pour la production, exécutez la commande suivante :

```bash
npm run build
```

Cela créera une version optimisée du projet dans le dossier dist.


