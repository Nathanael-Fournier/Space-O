import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

import './App.scss';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Planet from '../Planet/Planet';
import Ship from '../Ship/Ship';
import ShipDetail from '../ShipDetail/ShipDetail';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

import useScrollAuto from '../../utils/useScrollAuto';

function App() {
  const [ships, setShips] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loadingShips, setLoadingShips] = useState(true);
  const [loadingPlanets, setLoadingPlanets] = useState(true);

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planetes" element={<Planet planets={planets} />} />
        {/* <Route
          path="/planetes/:slug"
          element={<ShipDetail ships={ships} loadingShips={loadingShips} />}
        /> */}
        <Route path="/vaisseaux" element={<Ship ships={ships} />} />
        <Route
          path="/vaisseaux/:slug"
          element={<ShipDetail ships={ships} loadingShips={loadingShips} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
