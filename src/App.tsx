import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './components/Vacancies/Vacancies';
import Favourites from './components/Favourites/Favourites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Vacancies/>} path={"/vacancies"}></Route>
        <Route element={<Favourites/>} path={"/favourites"}></Route>
      </Routes>
    </div>
  );
}

export default App;
