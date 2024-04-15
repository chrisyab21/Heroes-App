import { ChangeEvent, FC, useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { addHeroe } from "../../../auth/firebase/providers";
import { AuthContext } from "../../../context/contexts/AuthContext";
import { UiContext } from "../../../context/contexts/UiContext";
import styles from './heroeForm.module.css';



export type HeroeFormData = {

  name: string,
  alterEgo: string,
  publisher: string,
  firstAppearance: string,
  gender: string
  image: File | null

};



export const HeroeForm: FC = () => {


  const { authState } = useContext(AuthContext);
  const { heroesReRender, setHeroesReRender, setOpenAddHeroeModal, uiState } = useContext(UiContext);

  console.log('Se abrio el formulario de add');

  const { register, handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
    setValue
  } = useForm<HeroeFormData>();


  const ref = useRef<HTMLDialogElement>(null);

  const [archivoSeleccionado, setArchivoSeleccionado] = useState<boolean>(false);

  useEffect(() => {
    if (uiState.openAddHeroeModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [uiState.openAddHeroeModal]);


  const onRegisterHero = async (formState: HeroeFormData) => {


    const resp = await addHeroe(authState.user?.id!, formState);

    if (!resp.ok) {

      console.log("Algo salio mal", resp.error);
      return;
    }

    setOpenAddHeroeModal(false);
    setHeroesReRender(!heroesReRender);
    console.log("Todo correcto");
    console.log(formState);

  }



  const manejarCambioArchivo = (event: ChangeEvent<HTMLInputElement>) => {

    const numeroDeArchivos = event.target.files?.length ?? 0;

    if (numeroDeArchivos > 0) {

      setValue("image", event.target.files![0]);
      setArchivoSeleccionado(true);

    } else {
      setArchivoSeleccionado(false);
    }
  };


  //console.log(formS)

  return (

    <dialog ref={ref} className={styles.dialog}>
      <form className={styles.heroForm} onSubmit={handleSubmit((data) => onRegisterHero(data))}>
        <h1 className={styles.tittle}>Heroe</h1>
        <hr />
        <div className={styles.inputsContainer}>
          <div className={styles.inputItem}>
            <input type="text" placeholder="Nombre"
              {...register('name', {
                required: {
                  value: true,
                  message: 'El nombre del heroe es requerido'
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className={styles.inputItem}>
            <input type="text" placeholder="Alter Ego"
              {...register("alterEgo", {
                required: {
                  value: true,
                  message: 'El alter Ego del heroe es requerido'
                },
              })}
            />
            {errors.alterEgo && <span>{errors.alterEgo.message}</span>}
          </div>
          <div className={styles.inputItem}>
            <input type="text" placeholder="Primera Aparicion"
              {...register("firstAppearance", {
                required: {
                  value: true,
                  message: 'La primera aparicion del heroe es requerida'
                },
              })}
            />
            {errors.firstAppearance && <span>{errors.firstAppearance.message}</span>}
          </div>
        </div>
        <div className={styles.genderContainer}>
          <span>Genero</span>
          <div className={styles.genderSubContainer}>
            <div className={styles.genderItem}>
              <input type="radio" value={"Male"} {...register('gender', {
                required: {
                  value: true,
                  message: 'Debe escoger un genero'
                }
              })} />
              <span>Masculino</span>
            </div>
            <div className={styles.genderItem}>
              <input type="radio" value={"Female"} {...register('gender', {
                required: {
                  value: true,
                  message: 'Debe escoger un genero'
                }
              })} />
              <span>Femenino</span>
            </div>
          </div>
        </div>
        <div className={styles.publisherContainer}>
          <span>Publisher</span>
          <div className={styles.publisherSubContainer}>
            <div className={styles.publisherItem}>
              <select id="publisher" {...register('publisher')}>
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
                <option value="Disney">Disney</option>
                <option value="Anime">Anime</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className={styles.publisherItem}>
              <input
                type="file"
                id="file-upload"
                {...register('image', { onChange: (event) => manejarCambioArchivo(event) })}
                accept="image/png, image/gif, image/jpeg, image/jpg"
                hidden
              />
              <label htmlFor="file-upload" className={`btn btn-primary ${styles.iconButton} ${archivoSeleccionado ? styles.fileSelected : ''}`}>
                {archivoSeleccionado ? <FontAwesomeIcon icon={faFileCircleCheck} /> : <>Image&nbsp;&nbsp;<FontAwesomeIcon icon={faUpload} /></>}
              </label>
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={`btn btn-secondary ${styles.close}`}
            onClick={() => {
              reset();
              setOpenAddHeroeModal(false);
            }}
            type="button"
          >
            Salir
          </button>
          <button
            className="btn btn-primary"
          >
            Guardar
          </button>
        </div>
      </form>
    </dialog>
  )
}
