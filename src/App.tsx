import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import HomePage from './pages/HomePage';
import AddressPage from './pages/AddressPage';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="AppContainer">
        <SideMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
