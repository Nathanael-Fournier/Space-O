# Space-O

## A faire lorsque l'on clone le projet

- Entrer la commande 'npm install' à la racine du projet

- Dans src/utils —> réécrire l’URL du back dans 'config.js' si le back n'est pas lancé sur 'localhost:8000'

- Si besoin d'envoyer en production --> Entrer la commande 'npm run build'

### A terminer

- Interaction
  . Une interaction quand le MDP est mauvais
  . Une interaction qui nous fait comprendre qu'on s'est connecté ( affichage conditionnel sur l'onglet de la navbar )

## Pourquoi pas

- Une page d'accueil avec la video du vaisseau avec un lien qui amenerait sur la page de présentation ( voir le code plus bas )

- Récuperer les données de l'utilisateur pour lui faire une page de profil

#### Le code du composant d'une éventuelle page d'accueil avec une vidéo

```jsx
      <video className="home-video" autoPlay loop muted playsInline>
        <source
          src="https://cdn.pixabay.com/video/2019/05/22/23882-338327769_large.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="home-title">
        Paré <br />
        au <br />
        décollage <br />?
      </h1>

// TODO --> AFFICHER UN BOUTON QUI EMMENE SUR LA PAGE D'ACCUEIL
```

#### Le code du CSS du composant

```css
.home-video {
  margin-top: 30vh;
  width: 100vw;
  padding-right: 5vh;
}

.home-title {
  margin: 0 5vh;
  background: -webkit-linear-gradient(45deg, v.$orangeColor, v.$color1);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: v.$mainFont;
  padding: calc(v.$homeMargin * 2) 0;
  font-size: calc(v.$homeFontSize * 2);
  text-align: center;
}
```
