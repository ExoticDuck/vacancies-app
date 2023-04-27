import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './components/Vacancies/Vacancies';
import Favourites from './components/Favourites/Favourites';
import { HeaderMenu } from './components/Header/Header';


function App() {
  const links = [
      {
        link: "/vacancies",
        label: "Поиск Вакансий",
      },
      {
        link: "/favourites",
        label: "Избранное",
      }
    ]
  
  return (
    <div className="App">
      <HeaderMenu links={links}/>
      <Routes>
        <Route element={<Vacancies/>} path={"/vacancies"}></Route>
        <Route element={<Favourites/>} path={"/favourites"}></Route>
      </Routes>
    </div>
  );
}

export default App;




