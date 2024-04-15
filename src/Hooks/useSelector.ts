import { useContext } from "react";
import { UiContext, uiContextType } from "../context/contexts/UiContext";



// Definir el hook selector usando TypeScript
export const useSelector = <T>(selector: (settings: uiContextType) => T): T => {

    const settings = useContext(UiContext);
    return selector(settings);
}





export const useSelector2 = <T>(selectors: { [K in keyof T]: (context: uiContextType) => T[K] }): T => {
    const context = useContext(UiContext);
    let selected: Partial<T> = {};
    for (const key in selectors) {
        if (selectors.hasOwnProperty(key)) {
            selected[key] = selectors[key](context);
        }
    }
    return selected as T;
};
