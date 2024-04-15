import { FormEvent, useContext, useState } from "react"
import { useForm } from "../../Hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import {searchHeroeByName } from "../../auth/firebase/providers"
import { AuthContext } from "../../context/contexts/AuthContext"
import { HeroCard2 } from "../components/heroeCard/HeroCard2"
import { Heroe } from "../../context/contexts/HeroeContext"

type CustomForm = {

  searchText: string,

}




export const SearchPage = () => {


  const { authState } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const query = queryString.parse(location.search);

  const { q = '' } = query;

  const qString = typeof q === "string" ? q : '';

  const searchBool = (qString.length == 0);

  //const heroes = getHeroesByName(qString);


  const formulario: CustomForm = {

    searchText: qString,

  }

  const { formState, onInputChange } = useForm<CustomForm>(formulario);


  const [heroes, setHeroes] = useState<any[]>();



  const onSearchSubmit = async (event: FormEvent) => {

    event.preventDefault();

    const {heroes} = await searchHeroeByName(authState.user?.id!, formState.searchText);

    setHeroes(heroes);


    //if (formState.searchText.trim().length <= 1 ) return;

    navigate(`?q=${formState.searchText}`);

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={(event) => onSearchSubmit(event)} >
            <input
              aria-label="input-field"
              type="text"
              placeholder="Buscar Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={formState.searchText}
              onChange={(event) => onInputChange(event)}
            />

            <button
              className="btn btn-primary mt-1"

            >
              Buscar

            </button>

          </form>

        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            searchBool ? <div className="alert alert-info"> Buscar un Heroe</div>
              : (heroes?.length === 0) && (<div className="alert alert-danger"> No hay un resultado <b>{q}</b> </div>)
          }

          {
            heroes?.map((hero: Heroe) => (
              <HeroCard2
                key={hero.name}
                heroe={{...hero}}
              ></HeroCard2>

            ))

          }

        </div>

      </div>

    </>
  )
}
