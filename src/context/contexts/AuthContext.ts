
import { createContext } from "react";
import { User } from "../providers/AuthProvider";

export type ContextType = {

    authState: {
        logged: boolean,
        user?: {
            id: string,
            name?: string
        }
    },

    login: (parametro: User) => void,
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