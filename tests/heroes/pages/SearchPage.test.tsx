import { render, screen } from "@testing-library/react";
import {SearchPage} from '../../../src/heroes/pages/SearchPage'
import React from "react";
import { MemoryRouter } from "react-router-dom";
describe('Pruebas en <SearchPage/>', () => {
    
    test('Debe de mostrarse correctamente con valores por defecto', () => { 

       const { container}= render(
            <MemoryRouter>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        screen.debug();

        expect(container).toMatchSnapshot();

     });


     test('Debe de mostrar a Batman y el input con el valor del QueryString', () => { 

       render(
            <MemoryRouter initialEntries={['/search?q=Batman']}>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const inputValue = screen.getByLabelText('input-field') as HTMLInputElement;

        expect(inputValue.value).toBe('Batman');


         const img = screen.getByRole('img') as HTMLIFrameElement;

         expect(img.src).toContain("/assets/heroes/dc-batman.jpg");


        screen.debug();

     });

     


 });


 test('Debe de mostrar a un error si no se encuentra el heroe (Batman123)', () => { 

    render(
         <MemoryRouter initialEntries={['/search?q=Batman123']}>
             <SearchPage></SearchPage>
         </MemoryRouter>
     );

     const inputValue = screen.getByLabelText('input-field') as HTMLInputElement;

     expect(inputValue.value).toBe('Batman123');

     expect(screen.getByText(`No hay un resultado`))

     screen.debug();

  });