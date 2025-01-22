// Importation des modules nécessaires pour la gestion d'état et des effets
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Importation des styles
import './App.scss';

// Importation des composants utilisés dans l'application
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Planet from '../Planet/Planet';
import PlanetDetail from '../PlanetDetail/PlanetDetail';
import Ship from '../Ship/Ship';
import ShipDetail from '../ShipDetail/ShipDetail';
import PilotDetail from '../PilotDetail/PilotDetail';
import Estimate from '../Estimate/Estimate';
import UserEstimate from '../Estimate/UserEstimate/UserEstimate';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

// Importation d'un hook personnalisé pour le défilement automatique
import useScrollAuto from '../../hooks/useScrollAuto';

// Composant principal de l'application
function App() {
  // Gestion de l'état d'ouverture / fermeture de l'onglet de connexion / deconnexion
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  // Gestion des informations d'authentification utilisateur stockées dans le localStorage
  const [isLogged, setIsLogged] = useState(
    () => localStorage.getItem('isLogged') === 'true' // Vérifie si l'utilisateur est connecté
  );
  const [userJWT, setUserJWT] = useState(
    () => localStorage.getItem('userJWT') || '' // Récupère le token JWT (si existant)
  );
  const [userEmail, setUserEmail] = useState(
    () => localStorage.getItem('userEmail') || '' // Récupère l'email de l'utilisateur (si existant)
  );

  // Synchronisation des informations d'authentification avec le localStorage
  useEffect(() => {
    localStorage.setItem('isLogged', isLogged);
  }, [isLogged]);

  useEffect(() => {
    localStorage.setItem('userJWT', userJWT);
  }, [userJWT]);

  useEffect(() => {
    localStorage.setItem('userEmail', userEmail);
  }, [userEmail]);

  // Appel du hook personnalisé pour le défilement automatique
  useScrollAuto();

  // Rendu du composant
  return (
    <div className="App">
      {/* Barre de navigation */}
      <Navbar
        isLogged={isLogged}
        settingsIsOpen={settingsIsOpen}
        setSettingsIsOpen={setSettingsIsOpen}
      />
      {/* Affiche le formulaire de connexion si les paramètres sont ouverts */}
      {settingsIsOpen && (
        <Login
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          setSettingsIsOpen={setSettingsIsOpen}
          setUserJWT={setUserJWT}
          setUserEmail={setUserEmail}
        />
      )}
      {/* Définition des routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planetes" element={<Planet />} />
        <Route path="/planetes/:slug" element={<PlanetDetail />} />
        <Route path="/vaisseaux" element={<Ship />} />
        <Route path="/vaisseaux/:slug" element={<ShipDetail />} />
        <Route path="/pilotes/:slug" element={<PilotDetail />} />
        <Route
          path="/devis"
          element={<Estimate isLogged={isLogged} userEmail={userEmail} />}
        />
        <Route
          path="/mes-devis"
          element={<UserEstimate userJWT={userJWT} isLogged={isLogged} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Pied de page */}
      <Footer />
    </div>
  );
}

// Exportation du composant
export default App;
