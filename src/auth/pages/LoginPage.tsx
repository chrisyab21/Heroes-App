import { useNavigate } from "react-router-dom"
import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);
  
  const onLogin = () =>{

    login('Caro Lina');
    
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, { replace:true });
    
  }


  return (
    <div className="containe mt-5 ms-2">

      <h1>Login</h1>
      <hr/>
      <button 
      className="btn btn-primary"
      onClick={()=> onLogin()}
      >
        Login
      </button>

    </div>
  )
}
