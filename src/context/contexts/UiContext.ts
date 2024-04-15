import { createContext } from "react";


export type uiContextType = {

    uiState: {
        openAddHeroeModal?: boolean,
        openEditHeroModal?: boolean,
        
    }
    heroesReRender:boolean,
    setOpenAddHeroeModal: Function,
    setOpenEditHeroModal: Function,
    setHeroesReRender: Function
}


const initState: uiContextType = {

    uiState: {
        openAddHeroeModal:false,
        openEditHeroModal: false,
        
    },
    heroesReRender:false,
    setOpenAddHeroeModal: () => {},
    setOpenEditHeroModal: () => {},
    setHeroesReRender: () => {}

}




export const UiContext = createContext<uiContextType>(initState);