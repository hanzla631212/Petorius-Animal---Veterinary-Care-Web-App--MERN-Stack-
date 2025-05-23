import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Pets from './Pages/Pets';
import Veterinarian from './Pages/Veterinarian';
import Feed from './Pages/Feed';
import Medicines from './Pages/Medicines';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home heading="Home" />} />
          <Route path="/pets" element={<Pets heading="Pets" />} />
          <Route path="/veterinarian" element={<Veterinarian heading="Veterinarian" />} />
          <Route path="/feed" element={<Feed heading="Feed" />} />
          <Route path="/medicines" element={<Medicines heading="Medicines" />} />
          <Route path="/about" element={<About heading="About" />} />
          <Route path="/contact" element={<Contact heading="Contact" />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
