import { localHeroes } from "../data/Heroes"






export const getHeroeById = (id?:string) => {
 

    return  localHeroes.find((heroe) => heroe.id === id );

}
