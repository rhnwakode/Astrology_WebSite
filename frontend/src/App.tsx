import React, { FunctionComponent } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import KundaliPage from './pages/Kundali/KundaliPage';
import { Routes, Route } from 'react-router-dom';
import KundaliContextProvider from './contexts/kundaliContext';

const App: FunctionComponent = () => {
  return (
    <div>
      <KundaliContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/kundali" element={<KundaliPage />} />
        </Routes>
        <Footer />
      </KundaliContextProvider>
    </div>
  );
};

export default App;
