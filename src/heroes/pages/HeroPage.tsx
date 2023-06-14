import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";

import {FC, useMemo} from 'react';

export const HeroPage:FC = () => {

  const params = useParams();

  const {id} = params;


  const hero = useMemo( () => getHeroeById(id), [id]); 

  const navigate = useNavigate();

  const onNavigateback = () =>{

    if(hero?.publisher === 'Marvel Comics'){

      navigate(`/marvel`, { replace: true});
    }

    if(hero?.publisher === 'DC Comics'){

      navigate(`/dc`, { replace: true});
    }
    
}



    if( !hero){
      return <Navigate to={'/marvel'}/>;
    }

  
    return (
      <>

      <div className="row mt-5">
          
          
          <div className="col-4">

            <img 
            src={`/assets/heroes/${id}.jpg`} 
            alt={hero.superhero} 
            className="img-thumbnail  animate__animated animate__fadeInLeft"
            />

          </div>

          <div className="col-8">
              <h3>{!!hero && hero.superhero}</h3>

              <ul className="list-group list-group-flush">

                  <li className="list-group-item">
                    <b>Alter Ego: </b>{hero.alter_ego}
                  </li>
                  <li className="list-group-item">
                    <b>Publisher: </b>{hero.publisher}
                  </li>
                  <li className="list-group-item">
                    <b>First Appearance: </b>{hero.first_appearance}
                  </li>
            </ul>

                <h5 className="mt-3"></h5>
                <p>{hero.characters}</p>

                <button 
                className="btn btn-outline-primary"
                onClick={() => onNavigateback()}
                >
                  Regresar


                </button>


          </div>

      </div>
          
      </>
    )
  }
  