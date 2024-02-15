import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserContext';
import { LOGIN_ROUTE } from '../const/routes';

export default function ProtectedRoutes() {
    const {isLogged} = useUserContext();
    return(isLogged ? <Outlet/> : <Navigate to={LOGIN_ROUTE} /> );
}