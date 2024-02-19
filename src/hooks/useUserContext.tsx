import { useContext } from "react";
import UserContext from "../context/userContext";

export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error("User Context should be used only within UserProvider");
    }

    return context;
}