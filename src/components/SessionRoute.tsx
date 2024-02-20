import { useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { Outlet } from "react-router-dom";
import { User } from "../types/types";

export default function SessionRoute() {
    const { login, isLogged } = useUserContext();

    useEffect(() => {
        if (sessionStorage.getItem("USER") !== null && !isLogged) {
            const user = JSON.parse(sessionStorage.getItem("USER")!) as User;
            login(user);
        }
    }, [isLogged, login]);

    return (
        <>
            <Outlet />
        </>
    );
}
