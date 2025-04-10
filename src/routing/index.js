import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Members from '../pages/members';
import Schemes from '../pages/schemes';
import Education from '../pages/education';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/members" element={<Members />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/education" element={<Education />} />



    </Routes>
  );
}

export default AppRoutes;
