
export type AuthTypes = {

    login: string,
    logout: string
}



export const authTypes: AuthTypes = {

    login: '[Auth] Loging',
    logout: '[Auth] Logout'
}



type HeroeTypes = {

    add: string,
    delete: string,
    update: string
}


export const HeroeTypes: HeroeTypes = {

    add: '[Heroe] Add',
    delete: '[Heroe] Delete',
    update: '[Heroe] Update'

}




type UiTypes = {

    openAddModal: string,
    openEditModal: string,
    heroesReRender: string
}

export const UiActionTypes: UiTypes = {

    openAddModal: '[Ui] AddHeroe',
    openEditModal: '[Ui] EditHeroe',
    heroesReRender: '[Ui] HeroeReRender'

}

