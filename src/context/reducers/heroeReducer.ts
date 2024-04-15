import { HeroeTypes } from "../../utils/types/types"



export type initState = {

    user?: {
        id: string,
        name: string,
        heroe: string
    }

}


export type action = {

    type: string,
    payload: {

    }
}

//Todo:Arreglar el reducer


export const heroeReducer = (state: initState, action: action):initState => {

    switch (action.type) {
        case HeroeTypes.add:
            //siempre devolvemos una copia del estado, jamas mutamos el estado directamente.
            return ({ ...state });

        case HeroeTypes.delete:

            return ({ ...state });

        case HeroeTypes.update:
            console.log();
            return ({ ...state});

        default:
            return ({ ...state });
    }

}