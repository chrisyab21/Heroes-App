import { Link, NavLink, useNavigate } from 'react-router-dom';
 import { FC, useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar:FC = () => {

    const {authState, logout} = useContext(AuthContext);

    const userLogged = authState.user?.name;

    const navigate = useNavigate();

    const onLogout = ():void => {

        logout();
        navigate('/login', { replace: true});
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={(props)=> props.isActive ? "nav-item nav-link active" : "nav-item nav-link" } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={(props)=> props.isActive ? "nav-item nav-link active" : "nav-item nav-link" }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={(props)=> props.isActive ? "nav-item nav-link active" : "nav-item nav-link" }
                        to="/search"
                    >
                       Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end me-2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {userLogged},{typeof userLogged}
                    </span>

                    <button 
                    className='nav-item nav-link btn'
                    onClick={() => onLogout()}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}