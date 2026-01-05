import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Capsules from './pages/Capsules';
import Hangars from './pages/Hangars';
import Garages from './pages/Garages';
import About from './pages/About';
import Documents from './pages/Documents';
import Contacts from './pages/Contacts';
import Modules from './pages/Modules';
import ModulesResidential from './pages/ModulesResidential';
import ModulesSmall from './pages/ModulesSmall';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/hangars" element={<Hangars />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/residential" element={<ModulesResidential />} />
            <Route path="/modules/small" element={<ModulesSmall />} />
            <Route path="/about" element={<About />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
