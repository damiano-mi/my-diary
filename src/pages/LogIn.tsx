import { DIARY_ROUTE, REGISTER_ROUTE } from "../const/routes"
import { Link, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { User } from "../types/types"
import { useState } from "react"
import md5 from "md5"

import { useDispatch, useSelector, } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { loginAsync } from "../state/user/userSlice";
import { serverAPI } from "../services/serverAPI"

export default function LogIn() {

    const [user, setUser] = useState({ name: "", password: "" });
    //const { data } = useFetch<User>(process.env.REACT_APP_USERS_URL!);
    const useGetUsersQuery = serverAPI.endpoints.getUsers.useQuery
    const { data } = useGetUsersQuery();
    const loading = useSelector((state: RootState) => state.user.loading);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function handleSubmit(e: any) {
        e.preventDefault();
        const exists = (u: User) => u.name === user.name && u.password === md5(user.password);
        if (data && data.some(exists)) {
            dispatch(loginAsync({ ...user, [e.target.name]: e.target.value }));
            navigate(DIARY_ROUTE);
        }
        else {
            alert("User or password invalid");
        }
    }

    function handlePerson(e: any) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center my-5" >
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Log in</h5>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" >Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handlePerson} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handlePerson} required />
                                </div>
                                <button type="submit" className="btn btn-primary">{loading ? "Loading..." : "Log in"}</button>
                            </form>
                            <div className="my-3">
                                <Link to={REGISTER_ROUTE}><p>Register here</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}