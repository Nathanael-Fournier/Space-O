import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Planet from '../Planet/Planet';
import Ship from '../Ship/Ship';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planetes" element={<Planet />} />
        <Route path="/vaisseaux" element={<Ship />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
