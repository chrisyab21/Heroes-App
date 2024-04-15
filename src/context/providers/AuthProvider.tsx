

import { FC, ReactNode, useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { authReducer } from "../reducers/authReducer";
import { authTypes } from "../../utils/types/types";
import { logoutFireBase } from "../../auth/firebase/providers";



type props = {

  children: ReactNode

}


export type User = {

  id: string,
  email: string,
  name: string
}


export type Tipo1 = {

  logged: boolean,
  user?: {
    id: string,
    name: string
  }
}



const initialState: Tipo1 = {

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
    name: string

  },

}

const init = () => {

  //const jason:string = JSON.stringify(initialStateInit.user);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const inicial: Tipo1 = {
    logged: user.name !== undefined,
    user: user
   
  }

  return inicial;

}



export const AuthProvider: FC<props> = ({ children }) => {


  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  console.log(authState);


  const login = (user: User) => {

    const action: action = {
      type: authTypes.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }


  const logout = async () => {

    localStorage.removeItem('user');

    await logoutFireBase();

    const action: action = {
      type: authTypes.logout,
      payload: {
        id: '',
        name: ''
      }
    }
    dispatch(action);
  }




  return (

    <AuthContext.Provider value={{ authState: authState, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  )
}
