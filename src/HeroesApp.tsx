
import {Outlet} from 'react-router-dom'
import { Navbar } from './Ui/components/NavBar'
import { AuthProvider } from './auth/context/AuthProvider'

export const HeroesApp = () => {
  return (
      <>
        <Navbar/>
    
        <Outlet/>
      </>

  )
}
