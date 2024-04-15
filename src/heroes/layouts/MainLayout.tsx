
import { Navbar } from '../../Ui/components/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
