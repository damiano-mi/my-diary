import { Outlet, Navigate } from "react-router-dom"
import { DIARY_ROUTE } from "../const/routes"
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export default function ProtectedLogIn() {
    
    const isLogged = useSelector((state: RootState) => state.user.isLogged);
    return(!isLogged && sessionStorage.getItem("USER") === null ? <Outlet /> : <Navigate to={DIARY_ROUTE} /> );
}