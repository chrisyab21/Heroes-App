import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { HeroesApp } from './HeroesApp';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { MarvelPage } from './heroes/pages/MarvelPage';
import { DcPage } from './heroes/pages/DcPage';
import { LoginPage } from './auth/pages/LoginPage';
import { SearchPage } from './heroes/pages/SearchPage';
import { HeroPage } from './heroes/pages/HeroPage';
import { AuthProvider } from './auth/context/AuthProvider';
import { PrivateRoute } from './heroes/routes/PrivateRoute';
import { PublicRoute } from './heroes/routes/PublicRoute';

const rutas:RouteObject[] = [
  {
    path: '/',
    element: <PrivateRoute><HeroesApp/></PrivateRoute>,
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
    element: <PublicRoute><LoginPage/></PublicRoute>

  },

]

const router = createBrowserRouter(rutas);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
