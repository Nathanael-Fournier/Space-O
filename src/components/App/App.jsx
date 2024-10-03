import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

import './App.scss';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Planet from '../Planet/Planet';
import PlanetDetail from '../PlanetDetail/PlanetDetail';
import Ship from '../Ship/Ship';
import ShipDetail from '../ShipDetail/ShipDetail';
import PilotDetail from '../PilotDetail/PilotDetail';
import Estimate from '../Estimate/Estimate';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

import useScrollAuto from '../../utils/useScrollAuto';

function App() {
  const [ships, setShips] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loadingShips, setLoadingShips] = useState(true);
  const [loadingPlanets, setLoadingPlanets] = useState(true);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const loadShips = () => {
    axios
      .get('http://localhost:8000/api/v1/ship')
      .then((response) => {
        setShips(response.data);
      })
      .finally(() => {
        setLoadingShips(false);
      });
  };

  const loadPlanets = () => {
    axios
      .get('http://localhost:8000/api/v1/planet')
      .then((response) => {
        setPlanets(response.data);
      })
      .finally(() => {
        setLoadingPlanets(false);
      });
  };

  useEffect(() => {
    loadShips();
    loadPlanets();
  }, []);

  useScrollAuto();

  return (
    <div className="App">
      <Navbar
        settingsIsOpen={settingsIsOpen}
        setSettingsIsOpen={setSettingsIsOpen}
      />
      {settingsIsOpen && (
        <Login isLogged={isLogged} setIsLogged={setIsLogged} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planetes" element={<Planet planets={planets} />} />
        <Route
          path="/planetes/:slug"
          element={
            <PlanetDetail planets={planets} loadingPlanets={loadingPlanets} />
          }
        />
        <Route path="/vaisseaux" element={<Ship ships={ships} />} />
        <Route
          path="/vaisseaux/:slug"
          element={<ShipDetail ships={ships} loadingShips={loadingShips} />}
        />
        <Route path="/pilotes/:slug" element={<PilotDetail />} />
        <Route
          path="/devis"
          element={
            <Estimate planets={planets} ships={ships} isLogged={isLogged} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
