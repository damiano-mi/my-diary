import UserContext from "../context/userContext"
import { useContext } from "react"

export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error("User Context should be used only within UserProvider");
    }

    return context;
}