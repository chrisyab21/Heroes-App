import { useNavigate, Link } from "react-router-dom"
import { FormEvent, useContext } from 'react'
import { loginWithEmailPassword } from "../../firebase/providers";
import { AuthContext } from "../../../context/contexts/AuthContext";
import imgt from '../../../assets/pngwing.com.png'
import styles from './loginPage.module.css';
import { useForm } from "../../../Hooks/useForm";
import { User } from "../../../context/providers/AuthProvider";


type loginForm = {

  email: string,
  password: string

}


export const LoginPage = () => {


  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const form = {
    email: '',
    password: ''
  }

  const { formState, onInputChange, OnResetForm } = useForm<loginForm>(form);


  const onLogin = async (event: FormEvent) => {

    event.preventDefault();

    const stateLogin = await loginWithEmailPassword(formState);

    if (stateLogin.ok) {

      const user:User = {
        id: stateLogin.uid ?? '',
        email: stateLogin.email ?? '',
        name: stateLogin.displayName ?? ''
      }

      login(user);
      //  todo: pasar datos de logueo
      const lastPath = localStorage.getItem('lastPath') || '/marvel';

      navigate(lastPath, { replace: true });


    } else {

      console.log('Error de logeo');
    }


  }




  return (

    <div className={`${styles.container}`}>
      <form className={styles.loginForm} onSubmit={(event) => onLogin(event)}>
        <h1 className={styles.tittle}>Login</h1>
        <hr className={styles.hr} />
        <div className={styles.inputsContainer}>
          <input type="text" placeholder="email" name="email" value={formState.email} onChange={(event) => onInputChange(event)} />
          <input type="text" placeholder="password" name="password" value={formState.password} onChange={(event) => onInputChange(event)} />
        </div>
        <div className={styles.buttonsContainer}>
          <span>Olvido su contraseña?</span>
          <button
            className={`btn btn-primary ${styles.loginButton}`}
          >
            Login
          </button>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.googleContainer}>
            <a>Ingrese con Google</a>
            <img src={imgt} alt="hola" />
          </div>
          <Link to={"/Register"}>Registrarme</Link>
        </div>
      </form>
    </div>
  )

}
