
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/Ui/components/NavBar"
import { AuthContext,ContextType } from "../../../src/context/contexts/AuthContext";
import React from "react";
import { MemoryRouter, useNavigate } from "react-router-dom";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));



describe('Pruebas en el <NavBar>', () => {

    
    const login = jest.fn();
    const logout = jest.fn();

    const contextValue:ContextType = {

        authState: {
            logged: false,
            user: {
                id: '25',
                name: 'Christian'
            }
        },
        login: login,
        logout: logout
    } 

    beforeEach(() => {

        jest.clearAllMocks();
    });

    test('Debe de mostrar el nombre del usuario loggeado', () => { 

        render(
        <MemoryRouter>
            <AuthContext.Provider value={contextValue}>
                <Navbar></Navbar>
            </AuthContext.Provider>
        </MemoryRouter>              
        )

        expect(screen.getByText(contextValue.authState.user?.name+','+typeof contextValue.authState.user?.name)).toBeTruthy();

        screen.debug();

    });


    test('Debe de llamar el logout y Navigate al hacer click en el boton', () => { 
    
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar></Navbar>
                </AuthContext.Provider>
            </MemoryRouter>             
            )

        const button = screen.getByLabelText('button-logout');

        fireEvent.click(button);

        expect(logout).toHaveBeenCalledTimes(1);

        expect(mockedUseNavigate).toHaveBeenCalled();


    });


});