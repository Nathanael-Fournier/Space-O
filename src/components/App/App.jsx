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

function App() {
  const [ships, setShips] = useState([]);
  const [loadingShips, setLoadingShips] = useState(true);

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

  useEffect(() => {
    loadShips();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planetes" element={<Planet />} />
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
