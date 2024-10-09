# Space-O

## A faire

- RESPONSIVE
  . Toujours vérifier si tout est correct

- Interaction
  . Une interaction quand le MDP est mauvais
  . Une interaction qui nous fait comprendre qu'on s'est connecté
  . Une interaction quand on soumet le formulaire de devis
  . Une interaction quand on soumet le formulaire de création de compte


## Pourquoi pas

- Une page d'accueil avec la video du vaisseau avec un lien qui amenerait sur la page de présentation ( voir le code dans "Bordel")

### Bordel

#### Le code du composant

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

#### Le code du css du composant

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

#### A voir pour fermer l'onglet de connexion / création de compte

```jsx
import { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import LoginForm from './LoginForm/LoginForm';
import CreateForm from './CreateForm/CreateForm';
import './Login.scss';

const Login = ({ loginFormIsOpen, setLoginFormIsOpen }) => {
  const [createFormIsOpen, setCreateFormIsOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Vérifie si le clic a eu lieu en dehors de l'élément formRef
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Fermer le formulaire si l'utilisateur clique en dehors
        setLoginFormIsOpen(false);
        setCreateFormIsOpen(false);
      }
    };

    if (loginFormIsOpen || createFormIsOpen) {
      // Ajoute l'événement de clic au document
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Nettoie l'événement lorsque le formulaire est fermé
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [loginFormIsOpen, createFormIsOpen, setLoginFormIsOpen]);

  return (
    <>
      {(loginFormIsOpen || createFormIsOpen) && (
        <div ref={formRef}>
          {loginFormIsOpen && (
            <LoginForm
              loginFormIsOpen={loginFormIsOpen}
              setLoginFormIsOpen={setLoginFormIsOpen}
              createFormIsOpen={createFormIsOpen}
              setCreateFormIsOpen={setCreateFormIsOpen}
            />
          )}
          {createFormIsOpen && <CreateForm />}
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  loginFormIsOpen: propTypes.bool.isRequired,
  setLoginFormIsOpen: propTypes.func.isRequired,
};

export default Login;

```

#### Recuperation des données de l'utilisateur

```jsx
  const saveUserData = () => {
    axios
      .get('http://localhost:8000/api/v1/login', {
        headers: { Authorization: `Bearer ${userJWT}` },
      })
      .then((response) => {
        setUserData(response.data);
      });
  };
```