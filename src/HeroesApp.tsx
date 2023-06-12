
import {Outlet} from 'react-router-dom'
import { Navbar } from './Ui/components/NavBar'

export const HeroesApp = () => {
  return (
    <>
        <Navbar/>
    
        <Outlet/>
    </>
  )
}
