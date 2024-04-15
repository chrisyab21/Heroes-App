
import {FC, ReactElement, useContext, useEffect} from 'react'
import { AuthContext } from '../../context/contexts/AuthContext';
import { Navigate, useLocation} from 'react-router-dom';


type props = {

    children: ReactElement
}

export const PrivateRoute:FC<props> = ({children}) => {

  const {pathname, search} = useLocation();

  const {authState} = useContext(AuthContext);
  
  
    useEffect(() => {

    const lastPath =  pathname + search; 
    localStorage.setItem('lastPath', lastPath);


    }, [pathname, search])
 
 

  return authState.logged ? children : <Navigate to={'/login'}></Navigate>;

}
