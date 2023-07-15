import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Pages/Home';
import Gallery from './components/Pages/Gallery';
import Cart from './components/Pages/Cart'
import { Login } from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import { CartItem } from './components/Shared/CartItem';
import { CartProvider } from 'react-use-cart';
import { Footer } from './components/Shared/Footer';
import ChoosePaymentMethod from './components/Pages/ChoosePaymentMethod';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={
            <CartProvider>
              <Cart />
            </CartProvider>} />
          <Route exact path='/ordernow' element={
            <CartProvider>
              <Gallery />
            </CartProvider>
          } />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/paymentmethod' element={<ChoosePaymentMethod />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
