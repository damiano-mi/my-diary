import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useDispatch, } from "react-redux";
import { AppDispatch } from "../state/store";
import { login } from "../state/user/userSlice";

export default function SessionRoute() {

    const isLogged = useSelector((state: RootState) => state.user.isLogged);
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        if (sessionStorage.getItem("USER") !== null && !isLogged) {
            const user = JSON.parse(sessionStorage.getItem("USER")!) as User;
            dispatch(login(user));
        }
    }, [isLogged, login]);

    return (
        <>
            <Outlet />
        </>
    );
}
