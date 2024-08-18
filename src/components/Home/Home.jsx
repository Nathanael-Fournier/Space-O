/* eslint-disable react/no-unescaped-entities */
import './Home.scss';
import HomeParts from './HomeParts';

const Home = () => {
  return (
    <div className="home-content">
      <video className="home-video" autoPlay loop muted playsInline>
        <source
          src="https://cdn.pixabay.com/video/2019/05/22/23882-338327769_large.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="home-title">Osez nous demander la Lune</h1>
      <HomeParts
        name="first-image"
        image="../src/assets/homePicture.png"
        title="Voyager au dela des frontières terrestres"
        text="Nous sommes des rêveurs qui adorons voyager. Vous revez aussi de partir
        dans l'espace ? Alors c'est le moment. Avec Space'O Agency, votre
        destination phare est à seulement quelques clics de la réalité."
        button="En savoir plus"
      />
      <HomeParts
        name="second-image"
        image="../src/assets/planets/Saturne.png"
        title="Nos Destinations"
        text="Plusieurs destinations s'offrent à vous, des grandes étendues de Mars 
        jusqu'au plages de roche blanche de Cérès."
        button="Voir les Planètes"
      />
      <HomeParts
        name="third-image"
        image="../src/assets/homeShip.png"
        title="Nos Vaisseaux"
        text="Une gamme complète de vaisseaux est à votre disposition, du cargo 
        jusqu'aux vaisseaux de croisière, nous en avons pour tout les goûts."
        button="Voir les Vaisseaux"
      />
    </div>
  );
};

export default Home;
