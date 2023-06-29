import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Pages/Home';
import Gallery from './components/Pages/Gallery';
import Menu from './components/Pages/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/ordernow' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
