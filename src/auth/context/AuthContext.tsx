
import { createContext } from "react";

type ContextType = {

    authState: {
        logged: boolean,
        user?: {
            id: string,
            name?: string
        }
    },

    login: (parametro: string) => void,
    logout: () => void,
}


const inicial:ContextType = {

    authState: {
        logged: false,
        user: {

            id: '777',
            name: 'Bruno'

        }
    },

    login: () => {} ,
    logout: () => {} ,
}



export const AuthContext = createContext<ContextType>(inicial);