import { UiActionTypes } from "../../utils/types/types";
import { uiContextType } from "../contexts/UiContext";





export type action = {

    type: string,
    payload: {
        modalState?: boolean,
        reRender?: boolean
    }
}

export type uiReducerType = {

    openAddHeroeModal: boolean,
    openEditHeroModal: boolean,
    heroesReRender: boolean
}




export const uiReducer = (state: uiReducerType, action: action) => {


    switch (action.type) {
        case UiActionTypes.openAddModal:
            return ({
                ...state,
                openAddHeroeModal: action.payload.modalState ?? state.openAddHeroeModal
            });
        case UiActionTypes.openEditModal:
            return ({
                ...state,
                openEditHeroModal: action.payload.modalState ?? state.openEditHeroModal
            });
        case UiActionTypes.heroesReRender:
            return ({
                ...state,
                heroesReRender: action.payload.reRender ?? state.heroesReRender
            });

        default:
            return state;
    }
}