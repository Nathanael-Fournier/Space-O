/* eslint-disable react/no-unescaped-entities */
// Désactivation temporaire de la règle ESLint pour permettre les apostrophes dans les textes

// Importation des images utilisées dans le composant
import illustration from '../../assets/homePicture.png';
import planete from '../../assets/planets/Saturne.png';
import vaisseau from '../../assets/homeShip.png';

// Importation des styles spécifiques au composant
import './Home.scss';

// Importation du composant HomeParts pour créer des sections réutilisables
import HomeParts from './HomeParts';

// Composant principal Home quireprésente la page d'accueil
const Home = () => {
  return (
    <div className="home-content">
      {/* Première section : Présentation générale de l'agence */}
      <HomeParts
        name="first-image" // Nom unique pour identifier la section
        image={illustration} // Image d'illustration pour la section
        title="Voyager au dela des frontières terrestres" // Titre de la section
        text="Chez Space'O Agency, nous réalisons votre rêve d'exploration spatiale. 
        Embarquez pour un voyage inoubliable vers les étoiles, avec des pilotes
        experts et des vaisseaux à la pointe de la technologie. Votre aventure 
        intergalactique n'est plus un rêve, elle est à portée de clic." // Texte descriptif
        link="#" // Lien du bouton (par défaut, lien vide)
        button="En savoir plus" // Texte du bouton
      />
      {/* Deuxième section : Destinations proposées */}
      <HomeParts
        name="second-image"
        image={planete}
        title="Nos Destinations"
        text="Partez à l'aventure au-delà des étoiles ! Explorez les dunes rouges de Mars, 
        flânez sur les plages blanches de Cérès, ou admirez les tempêtes de Jupiter. 
        Chaque planète offre un monde d'émerveillements à découvrir. Quel sera votre 
        prochain voyage spatial ?"
        link="/planetes" // Lien vers la page des planètes
        button="Voir les Planètes"
      />
      {/* Troisième section : Présentation des vaisseaux */}
      <HomeParts
        name="third-image"
        image={vaisseau}
        title="Nos Vaisseaux"
        text="Montez à bord de vaisseaux d'exception, guidés par des pilotes légendaires. 
        Que vous choisissiez un cargo pour l'exploration ou un vaisseau de croisière 
        pour un voyage tout confort, notre flotte vous garantit une expérience unique 
        parmi les étoiles."
        link="/vaisseaux" // Lien vers la page des vaisseaux
        button="Voir les Vaisseaux"
      />
    </div>
  );
};

// Export du composant
export default Home;
