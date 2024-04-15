import { render, screen} from "@testing-library/react";
import React from "react";
import {PublicRoute} from '../../src/heroes/routes/PublicRoute';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext, ContextType } from "../../src/context/contexts/AuthContext";


describe('Pruebas en   <PublicRoute/>', () => { 
    
    test('debe mostrar el children si no estoy autenticado ', () => { 

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

        render(
        <AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>Ruta Publica</h1>                
            </PublicRoute>
        </AuthContext.Provider>
        )

        screen.debug();

        expect(screen.getByText('Ruta Publica')).toBeTruthy();

     });


     test('Debe de navegar si esta auntenticado', () => { 

        
        const login = jest.fn();
        const logout = jest.fn();

        const contextValue:ContextType = {

            authState: {
                logged: true,
                user: {
                    id: '24',
                    name: 'Gurren Lagan'
                }
            },
            login: login,
            logout: logout
        } 

        render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="login" element={
                        <PublicRoute>
                           <h1>Ruta Publica</h1>                
                        </PublicRoute>
                    }
                    ></Route>

                    <Route path="marvel" element={<h1>Pagina de marvel</h1>}/>

                </Routes>
            </MemoryRouter>
           
        </AuthContext.Provider>
        )

        screen.debug();

        expect(screen.getByText('Pagina de marvel')).toBeTruthy();

      });
      
      
});