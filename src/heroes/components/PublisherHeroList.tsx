import { getHeroesByPublisher } from "../../auth/firebase/providers";
import { AuthContext } from "../../context/contexts/AuthContext";
import { FC, useContext, useEffect, useState } from 'react';
import { HeroCard2 } from "./heroeCard/HeroCard2";

type props = {

  publisher: string,
}



export const PublisherHeroList:FC<props> = ({publisher}) => {


  const {authState} = useContext(AuthContext);

  const [heroes, setHeroes] = useState<any>();

  //const heroes = useMemo(() => getHeroesByPublisher(Datos.publisher), [Datos.publisher]);


  useEffect(() => {

    const fetchHeroes = async () => {

      const result = await getHeroesByPublisher(authState.user?.id!, publisher);

      if (result.ok) {

        setHeroes(result.heroes);

      } else {
        // Maneja el caso de error o simplemente no establezcas héroes
        console.error(result.error);
      }

    }

    fetchHeroes();


  }, []);


  return (

    <div className={`row rows-cols-1 ${(heroes?.length) === 1 ? 'row-cols-md-2 row-cols-lg-2' : 'row-cols-md-3 row-cols-lg-3'} g-3`}>

      {
        heroes?.map((heroe:any) => (

          <HeroCard2
            key={heroe.name}
            heroe={{...heroe}}
          ></HeroCard2>
        ))
      }

    </div>

  )
}
