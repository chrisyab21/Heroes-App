import { useNavigate, Link } from "react-router-dom"
import { FormEvent, useContext, useState } from 'react'
import styles from './registerPage.module.css';
import { CreateData, registerUserWithEmailPassword } from "../../firebase/providers";
import { useForm } from "../../../Hooks/useForm";


const formulario: CreateData = {
  email: '',
  gender: '',
  password: '',
  nombre: ''
}

export const RegisterPage = () => {


  const { formState, onInputChange, OnResetForm } = useForm<CreateData>(formulario);


  const onRegister = async (event: FormEvent) => {

    event.preventDefault(); 

    const resp = await registerUserWithEmailPassword(formState);

    console.log(formState);
    console.log(resp);
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    //navigate(lastPath, { replace: true });

  }


  return (
    <div className={`${styles.container}`}>
      <form className={styles.registerform} onSubmit={(event) => onRegister(event)}>
        <h1 className={styles.tittle}>Registro</h1>
        <hr />
        <div className={styles.inputsContainer}>
          <input type="text" placeholder="Nombre" name="nombre" value={formState.nombre} onChange={(event) => onInputChange(event)} />
          <input type="text" placeholder="email" name="email" value={formState.email} onChange={(event) => onInputChange(event)} />
          <input type="text" placeholder="password" name="password" value={formState.password} onChange={(event) => onInputChange(event)} />
        </div>
        <div className={styles.gendersContainer}>
          <span>Genero</span>
          <div className={styles.gendersSubContainer}>
            <div className={styles.genderItem}>
              <input type="radio" name="gender" value={"mujer"} onChange={(event) => onInputChange(event)} />
              <span>Mujer</span>
            </div>
            <div className={styles.genderItem}>
              <input type="radio" name="gender" value={"hombre"} onChange={(event) => onInputChange(event)} />
              <span>Hombre</span>
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={`btn btn-primary ${styles.registerButton}`}
          >
            Crear
          </button>
        </div>
        <div className={styles.linksContainer}>
          <span>Ya tienes una cuenta?</span>
          <Link to={"/login"}>Inicia Sesion</Link>
        </div>
      </form>
    </div>
  )
}
