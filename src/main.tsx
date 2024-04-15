import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/providers/AuthProvider';
import { rutas } from './router/Rutas';
import { HeroeProvider } from './context/providers/HeroeProvider';
import { App } from './App';
import './styles.css';
import { UiProvider } from './context/providers/UiProvider';


const router = createBrowserRouter(rutas);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  <AuthProvider>
    <App>
      <UiProvider>
        <HeroeProvider>
          <RouterProvider router={router} />
        </HeroeProvider>
      </UiProvider>
    </App>
  </AuthProvider>


)
