import { authTypes } from "../../utils/types/types"


export type initState = {

    logged: boolean,
    user?: {
        id: string,
        name: string
    }


}


export type action = {

    type: string,
    payload: {
        id: string
        name: string
    }
}

const initialVar: initState = {

    logged: false,

}



export const authReducer = (initialState: initState = initialVar, action: action) => {

    switch (action.type) {

        case authTypes.login:
            return ({
                logged: true,
                user: action.payload
            });

        case authTypes.logout:
            return ({
                logged: false,
            });

        default:
            return initialState;

    }

}
