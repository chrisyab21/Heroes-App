import { FC } from 'react';
import { LocalHeroe } from "../../data/Heroes";
import { LocalHeroCard } from "../localHeroCard/LocalHeroCard";
import { getLocalHeroesByPublisher } from '../../helpers/getHeroesByPublisher';

type props = {

  publisher: string,
}



export const LocalPublisherHeroList: FC<props> = ({ publisher }) => {

  const localHeroes = getLocalHeroesByPublisher(publisher);

  return (

    <div className={`row rows-cols-1 ${(localHeroes?.length) === 1 ? 'row-cols-md-2 row-cols-lg-2' : 'row-cols-md-3 row-cols-lg-3'} g-3`}>

      {
        localHeroes?.map((heroe: LocalHeroe) => (

          <LocalHeroCard
            key={heroe.superhero}
            heroe={{ ...heroe }}
          ></LocalHeroCard>
        ))
      }

    </div>

  )
}
