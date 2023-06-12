import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";
 import { useMemo} from 'react';

type props = {

    publisher: string,
}



export const HeroList = (Datos:props) => {

      
    const heroes = useMemo(() => getHeroesByPublisher(Datos.publisher), [Datos.publisher]);

  return (
   
    <div className="row rows-cols-1 row-cols-md-3 g-3">

        {
            heroes.map((heroe) => (
                
                <HeroCard 
                  key={heroe.id}
                  {...heroe}
                  ></HeroCard> 
            ))
        }

    </div>

  )
}
