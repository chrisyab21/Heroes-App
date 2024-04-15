import { deleteHeroeByName } from "../../../auth/firebase/providers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FC, useContext } from "react";
import { AuthContext } from "../../../context/contexts/AuthContext";
import { UiContext } from "../../../context/contexts/UiContext";
import styles from './heroeCard2.module.css';
import { Heroe } from "../../../context/contexts/HeroeContext";
//import { useSelector, useSelector2 } from "../../../Hooks/useSelector";


type props = {

    heroe: Heroe,
    cambio?: Function

}


export const HeroCard2:FC<props> = ({heroe}) => {

    const {authState} = useContext(AuthContext);
    
    const {setHeroesReRender, heroesReRender, setOpenAddHeroeModal} = useContext(UiContext);

    //const pruebaRender = useSelector((context) => context.heroesReRender);


    // const { setHeroesReRender, heroesReRender } = useSelector2({
    //     setHeroesReRender: context => context.setHeroesReRender,
    //     heroesReRender: context => context.heroesReRender
    // });
    

    const deleteHero = async() => {

        const prueba = await deleteHeroeByName(authState.user?.id!, heroe.name);
        setHeroesReRender(!heroesReRender);    
        console.log('Heroe eliminado');

    }

    const editHero = () => {

      setOpenAddHeroeModal(true)

    }


    

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card" style={{ backgroundColor: "whitesmoke" }}>
                <div className={`row g-0 ${styles.cardRow}`}>
                    <div className={`col-4 ${styles.imgContainer}`}>
                        <img src={heroe.imageUrl} className="card-img" alt={heroe.name}
                            style={{
                                width: '100%', // Asegura que la imagen cubra el ancho del contenedor
                                height: '200px',
                                objectFit: 'cover', // Asegura que la imagen se ajuste al contenedor recortándola si es necesario
                            }} />
                    </div>
                    <div className={`col-8 ${styles.bodyContainer}`}>
                        <div className={`card-body ${styles.cardData}`}>
                            <h5 className="card-title">{heroe.name}</h5>
                            <p className={`card-text ${styles.cardText}`}>{heroe.alterEgo}</p>
                            {/* {(heroe.alter_ego !== heroe.characters) && (<p>{heroe.characters}</p>)} */}
                            <p className={`card-text ${styles.cardText}`}>{heroe.gender}</p>
                            <p className={`card-text ${styles.cardText}`}>
                                <small className="text-muted">{heroe.publisher}</small>
                            </p>
                            <div className={styles.buttonsContainer} >
                                <button className={`btn btn-primary ${styles.editBtn}`} onClick={() => editHero()}>
                                    <FontAwesomeIcon icon={faPenAlt} />
                                </button>
                                <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={() => deleteHero()}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                            {/* <Link to={`/hero/${heroe.id}`}>
                                Mas...
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
