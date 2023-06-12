import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { HeroesApp } from './HeroesApp';
import { createBrowserRouter, RouteObject, RouterProvider, Navigate } from 'react-router-dom';
import { MarvelPage } from './heroes/pages/MarvelPage';
import { DcPage } from './heroes/pages/DcPage';
import { LoginPage } from './auth/pages/LoginPage';
import { SearchPage } from './heroes/pages/SearchPage';
import { HeroPage } from './heroes/pages/HeroPage';

const rutas:RouteObject[] = [
  {
    path: '/',
    element: <HeroesApp/>,
    children: [
      {
        path: '/marvel',
        element: <MarvelPage/>
      },
      {
        path: '/Dc',
        element: <DcPage/>
      },
      {
        path: '/search',
        element: <SearchPage/>
      },
      {
        path: '/hero/:id',
        element: <HeroPage/>,    
      },

      // {
      //   path: '/hero/*',
      //   element: <Navigate to={'/hero'}/>,    
      // },
      // {
      //   path: '/hero/:id',
      //   element: <Navigate to={'/hero'}/>,    
      // },


      // {
      //   path: '/*',
      //   element: <Navigate to={'/marvel'}/>,    
      // },
      
      
    ],
  },

  {
    path: '/login',
    element: <LoginPage/>,

  },

]

const router = createBrowserRouter(rutas);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
