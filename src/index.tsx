import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import RandomBrewery, { RandomBreweryLoader } from './random_brewery';
import ListBrewery, { PagineBreweryLoader } from './pagine_brewery';
import AccueilPage, { AccueilLoader } from './accueil';

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AccueilPage />} path='/' loader={AccueilLoader}></Route>
      <Route element={<RandomBrewery />} path='/random' loader={RandomBreweryLoader}></Route>
      <Route element={<ListBrewery />} path='/brasserie:page' loader={PagineBreweryLoader}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>
);
