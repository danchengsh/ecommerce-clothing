import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './routes/homepage/homepage.component';

const navigationBar = () => {
  return (
    <div>
      <div>I am nav bar</div>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={navigationBar()}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
