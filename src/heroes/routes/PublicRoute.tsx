
import {FC, ReactElement, useContext} from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';


type props ={

    children: ReactElement
}


export const PublicRoute:FC<props> = ({children}) => {
  
    const {authState} = useContext(AuthContext);
    
    return !authState.logged ? children : <Navigate to={'/marvel'}/>

}
