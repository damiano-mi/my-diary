import { createContext, useEffect, useState } from "react";
import { User } from "../types/types"

interface UserContextState {
    user: User
    isLogged: boolean
    login(user: User): void
    logout(): void
}

const initialState = {
    user: {name: "", password: ""},
    isLogged: false,
    login: (user: User) => {},
    logout: () => {}
}

const UserContext = createContext<UserContextState>(initialState);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>({name:"", password: ""});
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const logout = () => {
        setUser({name: "", password: ""});
        setIsLogged(false);
    }

    const login = (user: User) => {
        setUser(user);
        setIsLogged(true);
    }

    return (
        <UserContext.Provider value={{user, isLogged, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;