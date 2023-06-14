import { types } from "../types/types"

export type Tipo1 = {

    logged: boolean,
    user?: {
        id: string,
        name: string
    }


}


type action = {

    type: string,
    payload: { 
        id: string
        name:string
    }
}

const initialVar:Tipo1 = {

    logged: false,

}



export const authReducer = (initialState:Tipo1=initialVar, action:action) => {

        switch (action.type) {

            case types.login:
                return ({
                    logged: true,
                    user: action.payload
                });
                
            case types.logout:
                return ({
                    logged: false,
                });
        
            default:
                return initialState;
            
        }

}
