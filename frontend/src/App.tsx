import React, { FunctionComponent } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import { Routes, Route } from 'react-router-dom';

const App: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
