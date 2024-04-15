
import { FC, ReactElement, ReactNode, useReducer } from 'react';
import { HeroeContext } from '../contexts/HeroeContext';
import { heroeReducer, initState } from '../reducers/heroeReducer';


type props = {

    children: ReactNode
}



export const HeroeProvider: FC<props> = ({ children }) => {

    const initial: initState = {
        user: {
            id: '1',
            heroe: 'Kael',
            name: 'Prueba'
        }

    }

    const [state, dispatch] = useReducer(heroeReducer, initial);



    return (
        <HeroeContext.Provider value={{ heroes: [], localHeroes: [], favorite: { alter_ego: '', id: '', characters: '', first_appearance: '', publisher: '', superhero: '' } }}>
            {children}
        </HeroeContext.Provider>
    );

}