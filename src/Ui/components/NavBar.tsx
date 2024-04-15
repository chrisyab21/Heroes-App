import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FC, useContext } from 'react';
import { AuthContext } from '../../context/contexts/AuthContext';


export const Navbar: FC = () => {

    const { authState, logout } = useContext(AuthContext);

    const userLogged = authState.user?.name;

    const navigate = useNavigate();

    const onLogout = (): void => {

        logout();
        navigate('/login', { replace: true });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                to={"/"}
                className="navbar-brand"

            >
                Comics
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={(props) => props.isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                        to="/Marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={(props) => props.isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                        to="/DC"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={(props) => props.isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                        to="/Marvel-Local"
                    >
                        MarvelLocal
                    </NavLink>

                    <NavLink
                        className={(props) => props.isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                        to="/DC-Local"
                    >
                        DCLocal
                    </NavLink>

                    <NavLink
                        className={(props) => props.isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                        to="/MyHeroes"
                    >
                        MyHeroes
                    </NavLink>

                    <NavLink
                        className={(props) => props.isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end me-2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {userLogged}
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={() => onLogout()}
                        aria-label='button-logout'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}