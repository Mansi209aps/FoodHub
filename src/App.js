import React from 'react';
import { Navbar } from './components/Shared/Navbar';
import { Home } from './components/Pages/Home';
import { Footer } from './components/Shared/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
