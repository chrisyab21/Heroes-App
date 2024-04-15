import { render, screen} from "@testing-library/react";
import React from "react";
import {PrivateRoute} from '../../src/heroes/routes/PrivateRoute';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext, ContextType } from "../../src/context/contexts/AuthContext";
describe('Pruebas en   <PublicRoute/>', () => { 
    
    test('debe mostrar el children si esta autenticado ', () => { 

        Storage.prototype.setItem = jest.fn();

        const login = jest.fn();
        const logout = jest.fn();

        const contextValue:ContextType = {

            authState: {
                logged: true,
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
            <MemoryRouter initialEntries={['/marvel?q=batman']}>
                <Routes>
                    <Route path="login" element={
                           <h1>Ruta Publica</h1>                
                    }
                    ></Route>

                    <Route path="marvel" element={                   
                        <PrivateRoute>
                            <h1>Pagina de marvel</h1>
                        </PrivateRoute>   
                    }/>

                </Routes>
            </MemoryRouter>
           
        </AuthContext.Provider>
        )

        screen.debug();

        expect(screen.getByText('Pagina de marvel')).toBeTruthy();
        
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel?q=batman');

     });


    });