import { useUserContext } from "../hooks/useUserContext"
import { Outlet, Navigate } from "react-router-dom"
import { DIARY_ROUTE } from "../const/routes"

export default function ProtectedLogIn() {
    const {isLogged} = useUserContext();
    return(!isLogged && sessionStorage.getItem("USER") === null ? <Outlet /> : <Navigate to={DIARY_ROUTE} /> );
}