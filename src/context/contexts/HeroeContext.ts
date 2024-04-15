import { createContext } from 'react';
import { localHeroes, LocalHeroe } from '../../heroes/data/Heroes';



export type Heroe = {

    name: string,
    alterEgo: string,
    publisher: string,
    firstAppearance: string,
    gender: string,
    imageUrl: string

}



type heroesContextType = {

    heroes: Heroe[],
    localHeroes: LocalHeroe[],
    favorite: LocalHeroe
}


const state: heroesContextType = {

    localHeroes: localHeroes,
    heroes: [],
    favorite: localHeroes[1]
}



export const HeroeContext = createContext<heroesContextType>(state);