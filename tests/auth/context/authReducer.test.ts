
import {authReducer, action} from '../../../src/context/reducers/authReducer';
import {Tipo1} from '../../../src/context/providers/AuthProvider'
import {authTypes} from '../../../src/utils/types/types';

describe('Pruebas en el authReducer', () => { 
    
        test('Debe de retornar el estado por defecto', () => { 
            
            const inicial:Tipo1 = {

                logged: false,
                user:  {                   
                    id: '01',
                    name: 'McLovin'
                }                        
            }

            const action:action = {
                    type: 'Defecto',
                    payload: {
                        id: '12',
                        name: 'Carolina'
                    }                    
                }
            
            const prueba:Tipo1 = authReducer(inicial, action );

            expect(prueba.logged).toBe(inicial.logged);
            expect(prueba.user?.id).toBe(inicial.user?.id);
            expect(prueba.user?.name).toBe(inicial.user?.name);
            
        });


        test('Debe de llamar al login y establecer el usuario', () => { 
        
            const inicial:Tipo1 = {
    
                logged: false,
                
            }
            
           const action:action = {
                type: authTypes.login,
                payload: {
                    id: '12',
                    name: 'Carolina'
                }
                
             }
            
            const prueba:Tipo1 = authReducer(inicial, action );
    
            expect(prueba.logged).toBeTruthy();
            expect(prueba.user?.id).toBe(action.payload.id);
            expect(prueba.user?.name).toBe(action.payload.name);
            
        });


        
        test('Debe de llamar al logout y borrar el name y id del usuario', () => { 
        
            const inicial:Tipo1 = {
    
                logged: true,
                
            }
            
           const action:action = {
                type: authTypes.logout,
                payload: {
                    id: '',
                    name: ''
                }
                
             }
            
            const prueba:Tipo1 = authReducer(inicial, action );
    
            expect(prueba.logged).toBeFalsy();
            expect(prueba.user?.id).toBe(undefined);
            expect(prueba.user?.name).toBe(undefined);
            
        });


        

    
    });