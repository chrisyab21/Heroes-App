import { useState } from "react"


type Objeto = {
    target: {

        value: any
        name: string
    }
}

type Data = React.ChangeEvent<HTMLInputElement> | Objeto



export const useForm = <T>(initialForm:T) => {

      const [formState, setformState] = useState(initialForm);
    
      const FormaBase:T = initialForm;


      const onInputChange = (event:Data) =>{

        const  {value, name } = event.target;
    
            setformState({  

                  ...formState,
                  [name]: value,
               });
                                
        }
        

     const OnResetForm = ():void => {

         setformState(FormaBase);  

     }



    
  return (  {

            formState: formState,
            onInputChange: onInputChange,
            OnResetForm: OnResetForm


        }

     )
}