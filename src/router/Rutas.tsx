import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { SearchPage } from "../heroes/pages/SearchPage";
import { HeroPage } from "../heroes/pages/HeroPage";
import { LoginPage } from "../auth/pages/loginPage/LoginPage";
import { PublicRoute } from "../heroes/routes/PublicRoute";
import { RegisterPage } from "../auth/pages/registerPage/RegisterPage";
import { MainLayout } from "../heroes/layouts/MainLayout";
import { MyHeroesPage } from "../heroes/pages/MyHeroesPage";
import { LocalMarvelPage } from "../heroes/pages/LocalMarvelPage";
import { LocalDcPage } from "../heroes/pages/LocalDcPage";




export const rutas: RouteObject[] = [
  {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <MarvelPage />
      },
      {
        path: 'marvel',
        element: <MarvelPage />
      },
      {
        path: 'DC',
        element: <DcPage />
      },
      {
        path: 'Marvel-Local',
        element: <LocalMarvelPage />
      },
      {
        path: 'DC-Local',
        element: <LocalDcPage />
      },
      {
        path: 'MyHeroes',
        element: <MyHeroesPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'hero/:id',
        element: <HeroPage />,
      },

      // {
      //   path: '/*',
      //   element: <Navigate to={'/marvel'}/>,    
      // },


    ],
  },

  {
    path: '/login',
    element: <PublicRoute><LoginPage /></PublicRoute>

  },

  {
    path: '/register',
    element: <PublicRoute><RegisterPage /></PublicRoute>

  },

]