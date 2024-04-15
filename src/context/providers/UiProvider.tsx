
import { FC, ReactNode, useReducer } from 'react';
import { UiContext, uiContextType } from '../contexts/UiContext';
import { action, uiReducer , uiReducerType} from '../reducers/uiReducer';
import { UiActionTypes } from '../../utils/types/types';


type props = {

  children: ReactNode
}

const initialState: uiReducerType = {

  openEditHeroModal:false,
  openAddHeroeModal:false,
  heroesReRender: false
}




export const UiProvider: FC<props> = ({ children }) => {

  const [uiState, dispatch] = useReducer(uiReducer, initialState);

  const setOpenAddHeroeModal = (modalState:boolean) => {

    const action:action = {
      type: UiActionTypes.openAddModal,
      payload: {
        modalState: modalState,
      }
    }

    dispatch(action);
  }

  const setOpenEditHeroeModal = (modalState:boolean) => {

    const action:action = {
      type: UiActionTypes.openEditModal,
      payload: {
        modalState: modalState,
      }
    }

    dispatch(action);
  }

  
  const setHeroesReRender = (reRender:boolean) => {

    const action:action = {
      type: UiActionTypes.heroesReRender,
      payload: {
        reRender: reRender
      }
    }

    dispatch(action);
  }


  return (
    <UiContext.Provider value={{uiState:uiState, heroesReRender:uiState.heroesReRender, setOpenAddHeroeModal:setOpenAddHeroeModal , setOpenEditHeroModal: setOpenEditHeroeModal, setHeroesReRender: setHeroesReRender}}>
      {children}
    </UiContext.Provider>
  )
}
