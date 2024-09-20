import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Ship from '../Ship/Ship';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vaisseaux" element={<Ship />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
