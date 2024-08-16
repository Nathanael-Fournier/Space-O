/* eslint-disable react/no-unescaped-entities */
import './Home.scss';

const Home = () => {
  return (
    <div className="home-content">
      <h1 className="home-title">Osez nous demander la Lune</h1>
      <video className="home-video" autoPlay loop muted playsInline>
        <source
          src="https://cdn.pixabay.com/video/2019/05/22/23882-338327769_large.mp4"
          type="video/mp4"
        />
      </video>
      {/* A transformer en sous-composants */}
      <img
        className="secondary-picture"
        src="../src/assets/homePicture.png"
        alt="Voyageurs qui vont vers une fusée"
      />
      <h2 className="secondary-title">
        Voyager au dela des frontières terrestres
      </h2>
      <p className="secondary-text">
        Nous sommes des rêveurs qui adorons voyager. Vous revez aussi de partir
        dans l'espace ? Alors c'est le moment. Avec Space'O Agency, votre
        destination phare est à seulement quelques clics de la réalité.
      </p>
    </div>
  );
};

export default Home;
