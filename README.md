# Space-O

## A faire

- Responsive de la page d'accueil
- Deployer avec surge

## Pourquoi pas

- Une page d'accueil avec la video du vaisseau avec un lien qui amenerait sur la page de présentation ( voir le code dans "Bordel")

### Bordel XD

Le code du composant

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
```

Le code du css du composant

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