import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginJung from './pages/suinJung/Login/LoginJung';
import LoginJun from './pages/seulgiJun/Login/LoginJun';
import LoginYoo from './pages/kanghoYoo/Login/LoginYoo';
import LoginJo from './pages/jinmokJo/Login/LoginJo';

import MainJung from './pages/suinJung/Main/MainJung';
import MainJun from './pages/seulgiJun/Main/MainJun';
import MainYoo from './pages/kanghoYoo/Main/MainYoo';
import MainJo from './pages/jinmokJo/Main/MainJo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jung" element={<LoginJung />} />
        <Route path="/login-jun" element={<LoginJun />} />
        <Route path="/login-jo" element={<LoginJo />} />
        <Route path="/login-yoo" element={<LoginYoo />} />
        <Route path="/main-jung" element={<MainJung />} />
        <Route path="/main-jun" element={<MainJun />} />
        <Route path="/main-jo" element={<MainJo />} />
        <Route path="/main-yoo" element={<MainYoo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
