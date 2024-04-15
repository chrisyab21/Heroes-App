

import {localHeroes} from '../data/Heroes';





export const getLocalHeroesByPublisher = (publisher:string) => {

    const validPublishers:string[] = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher)){

        throw new Error(`${publisher} no es un una editorial valida`);
    }else{
        
        return localHeroes.filter((heroe)=> heroe.publisher === publisher );

    }



}