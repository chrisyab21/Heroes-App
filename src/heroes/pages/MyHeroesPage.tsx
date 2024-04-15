import { useContext, useState } from "react";
import { UserHeroList } from "../components/UserHeroList";
import { HeroeForm } from "../components/heroeForm/HeroeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { UiContext } from "../../context/contexts/UiContext";
import styles from './myHeroesPage.module.css';

export const MyHeroesPage = () => {

  const { setOpenAddHeroeModal, uiState } = useContext(UiContext);

  console.log("Me renderice: ");


  return (

    <>
      <div className={`p-5 d-flex flex-column align-items-start`}>
        <div className={`${styles.header} align-self-start`}>
          <h1 style={{ color: "white" }}>My Hero List</h1>
          <div className={styles.buttonsContainer}>
            <button type="button" className={`btn btn-primary ${styles.btnResponsive} ${styles.addButton}`} onClick={() => setOpenAddHeroeModal(true)}>
              Agregar heroe
            </button>
            <button type="button" className={`btn btn-danger ${styles.btnResponsive} ${styles.deleteBtn}`} onClick={() => {}}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
        <hr></hr>
        <div className={styles.cardContainer}>
          <UserHeroList />
        </div>
      </div>
      {uiState.openAddHeroeModal && <HeroeForm />}
    </>
  )
}
