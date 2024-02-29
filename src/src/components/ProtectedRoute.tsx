import { Outlet, Navigate } from "react-router-dom"
import { LOGIN_ROUTE } from "../const/routes"
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export default function ProtectedRoutes() {
    
    const isLogged = useSelector((state: RootState) => state.user.isLogged);
    return (isLogged ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />);
}