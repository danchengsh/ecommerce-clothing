import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/homepage/homepage.component';
import SignIn from './routes/sign-in/sign-in.component';
import NavigationBar from './routes/navigationbar/navigationbar.component';

const Shop = () => {
  return (
    <div>I am shop</div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={Shop()} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
