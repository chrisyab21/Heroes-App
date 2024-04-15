import { localHeroes } from "../data/Heroes";



export const getHeroesByName = (name:string = '') => {
 
    name = name.toLowerCase().trim();

    if(name.length === 0) return  [];


    return localHeroes.filter(
        (hero) => hero.superhero.toLowerCase().includes(name)
        );

}
