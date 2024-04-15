import { getHeroes } from "../../auth/firebase/providers";
import { AuthContext } from "../../context/contexts/AuthContext";
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { HeroCard2 } from "./heroeCard/HeroCard2";
import { useSelector } from "../../Hooks/useSelector";
import { Heroe } from "../../context/contexts/HeroeContext";




export const UserHeroList: FC = () => {


  const { authState } = useContext(AuthContext);

  //const { uiState: { heroesReRender } } = useContext(UiContext);

  const hRender = useSelector((contexto) => contexto.heroesReRender);

  console.log(authState.user?.id);

  const [heroes, setHeroes] = useState<any>();


  useEffect(() => {

    const fetchHeroes = async () => {

      console.log("llamando a los heroes de FireBase");
      const result = await getHeroes(authState.user?.id!);

      if (result.ok) {

        setHeroes(result.heroes);

      } else {
        // Maneja el caso de error o simplemente no establezcas héroes
        console.error(result.error);
      }

    }

    fetchHeroes();

  }, [hRender]);





  return (

    //<div className=`row rows-cols-1 row-cols-md-2 row-cols-lg-2 g-3`>

    <div className={`row rows-cols-1 ${(heroes?.length) === 1 ? 'row-cols-md-2 row-cols-lg-2' : 'row-cols-md-3 row-cols-lg-3'} g-3`}>

      {heroes?.map((heroe: Heroe) => (

        <HeroCard2
          key={heroe.name}
          heroe={{ ...heroe }}
        ></HeroCard2>
      ))
      }

    </div>

  )
}
