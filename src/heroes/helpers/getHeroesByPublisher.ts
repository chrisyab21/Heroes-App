

import {heroes} from '../data/Heroes';





export const getHeroesByPublisher = (publisher:string) => {

    const validPublishers:string[] = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher)){

        throw new Error(`${publisher} no es un una editorial valida`);
    }else{
        
        return heroes.filter((heroe)=> heroe.publisher === publisher );

    }



}