import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Pages/Home';
import Gallery from './components/Pages/Gallery';
import Menu from './components/Pages/Menu';
// import { Cart } from './components/Pages/Cart';
import { Login } from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import CartItem from './components/Shared/CartItem';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/ordernow' element={<Menu />} />
          <Route exact path='/cart' element={<CartItem />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
