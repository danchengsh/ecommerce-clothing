import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/homepage/homepage.component';
import Authentication from './routes/authentication/authentication.component';
import NavigationBar from './routes/navigationbar/navigationbar.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
