
import {FC, ReactElement, useContext} from 'react';
import { AuthContext } from '../../context/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import styles from './publicRoute.module.css';

type props = {

    children: ReactElement
}


export const PublicRoute:FC<props> = ({children}) => {

  
    const {authState} = useContext(AuthContext);
    

    return (

        !authState.logged ? <div className={styles.loginPageContainer}>{children}</div> : <Navigate to={'/marvel'}/>
        
    ); 
}
