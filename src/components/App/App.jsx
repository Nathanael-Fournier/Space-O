import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.scss';

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

import useScrollAuto from '../../utils/useScrollAuto';

function App() {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [userJWT, setUserJWT] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useScrollAuto();

  return (
    <div className="App">
      <Navbar
        isLogged={isLogged}
        settingsIsOpen={settingsIsOpen}
        setSettingsIsOpen={setSettingsIsOpen}
      />
      {settingsIsOpen && (
        <Login
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          setSettingsIsOpen={setSettingsIsOpen}
          setUserJWT={setUserJWT}
          setUserEmail={setUserEmail}
        />
      )}
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
      <Footer />
    </div>
  );
}

export default App;
