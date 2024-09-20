/* eslint-disable react/no-unescaped-entities */
import './Home.scss';

import HomeParts from './HomeParts';

const Home = () => {
  return (
    <>
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
        text="Partez à l'aventure au-delà des étoiles ! Explorez les dunes rouges de Mars, 
        flânez sur les plages blanches de Cérès, ou admirez les tempêtes de Jupiter. 
        Chaque planète offre un monde d'émerveillements à découvrir. Quel sera votre 
        prochain voyage spatial ?"
        button="Voir les Planètes"
      />
      <HomeParts
        name="third-image"
        image="../src/assets/homeShip.png"
        title="Nos Vaisseaux"
        text="Montez à bord de vaisseaux d'exception, guidés par des pilotes légendaires. 
        Que vous choisissiez un cargo pour l'exploration ou un vaisseau de croisière 
        pour un voyage tout confort, notre flotte vous garantit une expérience unique 
        parmi les étoiles."
        button="Voir les Vaisseaux"
      />
    </>
  );
};

export default Home;
