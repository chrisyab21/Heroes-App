

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";


type props= {

  children: React.ReactNode

}

type Tipo1 = {

  logged: boolean,
  user?: {
    id: string,
    name: string
   }
}

const initialState:Tipo1 = {

    logged: false,
    user: {
      id: '123',
      name: 'Gatote'
    }
}


type action = {

  type: string,
  payload: { 
    id: string
    name:string
  
  },

}

const init = () => {

 //const jason:string = JSON.stringify(initialStateInit.user);
 const user = JSON.parse(localStorage.getItem('user') || '{}'); 

  const inicial:Tipo1 = {
        logged: user.name !== undefined,
        user: user
    } 

  return inicial;

}



export const AuthProvider = (Datos: props) => {

    const [authState, dispatch] = useReducer(authReducer,initialState, init);


    const login = (name:string) => {

      const user = {
        id: 'Abc',
        name: name,
      } 

      const action:action = {
        type: types.login,
        payload: user 
      }
      
       localStorage.setItem('user', JSON.stringify(user));
       
       dispatch(action);
    }


    const logout = () => {

     localStorage.removeItem('user');

      const action:action = {
        type: types.logout,
        payload: {
          id: '',
          name: ''
        }
      }       
      dispatch(action);
    }




  return (
    
    <AuthContext.Provider value={{ authState: authState, login: login, logout: logout}}>
      {Datos.children}
    </AuthContext.Provider> 
  )
}
