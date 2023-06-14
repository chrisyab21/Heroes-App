
import {FC, ReactElement, useContext, useMemo, useEffect} from 'react'
import { AuthContext } from '../../auth/context/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

type props = {

    children: ReactElement
}

export const PrivateRoute:FC<props> = ({children}) => {

  const {pathname, search} = useLocation();
  
    useEffect(() => {

    const lastPath =  pathname + search; 
    localStorage.setItem('lastPath', lastPath);


    }, [pathname, search])
 
 

  const {authState} = useContext(AuthContext);

 

  return authState.logged ? children : <Navigate to={'/login'}></Navigate>;

}
