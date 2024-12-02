import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Members from '../pages/members';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/members" element={<Members />} />

    </Routes>
  );
}

export default AppRoutes;
