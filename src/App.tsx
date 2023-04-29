import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './components/Vacancies/Vacancies';
import Favourites from './components/Favourites/Favourites';
import { HeaderMenu } from './components/Header/Header';
import { MantineProvider } from '@mantine/core';


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
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          colors: {
            // // Add your color
            // deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            // // or replace default theme color
            // blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
          },

          shadows: {
            // md: '1px 1px 3px rgba(0, 0, 0, .25)',
            // xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },
          fontFamily: 'Inter',
          headings: {
            fontFamily: 'Inter',
            // sizes: {
            //   h1: { fontSize: '2rem' },
            // },
          },
        }}>
        <HeaderMenu links={links} />
        <Routes>
          <Route element={<Vacancies />} path={"/vacancies"}></Route>
          <Route element={<Favourites />} path={"/favourites"}></Route>
        </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;




