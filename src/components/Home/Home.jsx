/* eslint-disable react/no-unescaped-entities */
import illustration from '../../assets/homePicture.png';
import planete from '../../assets/planets/Saturne.png';
import vaisseau from '../../assets/homeShip.png';

import './Home.scss';

import HomeParts from './HomeParts';

const Home = () => {
  return (
    <>
      <HomeParts
        name="first-image"
        image={illustration}
        title="Voyager au dela des frontières terrestres"
        text="Chez Space'O Agency, nous réalisons votre rêve d'exploration spatiale. 
        Embarquez pour un voyage inoubliable vers les étoiles, avec des pilotes
        experts et des vaisseaux à la pointe de la technologie. Votre aventure 
        intergalactique n'est plus un rêve, elle est à portée de clic."
        button="En savoir plus"
      />
      <HomeParts
        name="second-image"
        image={planete}
        title="Nos Destinations"
        text="Partez à l'aventure au-delà des étoiles ! Explorez les dunes rouges de Mars, 
        flânez sur les plages blanches de Cérès, ou admirez les tempêtes de Jupiter. 
        Chaque planète offre un monde d'émerveillements à découvrir. Quel sera votre 
        prochain voyage spatial ?"
        button="Voir les Planètes"
      />
      <HomeParts
        name="third-image"
        image={vaisseau}
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
