import { heroes } from "../data/Heroes"






export const getHeroeById = (id?:string) => {
 

    return  heroes.find((heroe) => heroe.id === id );

}
