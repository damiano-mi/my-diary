
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { urlUsers as SOURCE } from "../const/links";
import { User } from "../types/types";
import useFetch from "../hooks/useFetch";
import { DIARY_ROUTE, REGISTER_ROUTE } from "../const/routes";
import md5 from "md5";
import { useUserContext } from "../hooks/useUserContext";

export default function LogIn() {
    const {login} = useUserContext();
    const [user, setUser] = useState({ name: "", password: "" });
    const { data } = useFetch<User>(SOURCE);
    const navigate = useNavigate();

    function handleSubmit(e: any) {
        const exists = (u: User) => u.name === user.name && u.password === md5(user.password);
        if (data.some(exists)) {
            e.preventDefault();
            navigate(DIARY_ROUTE);
        }
        else {
            e.preventDefault();
            alert("User or password invalid");
            setUser({ name: "", password: "" });
        }
    }

    function handlePerson(e: any) {
        setUser({ ...user, [e.target.name]: e.target.value });
        login({...user,[e.target.name]: e.target.value});
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
                                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handlePerson} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handlePerson} required/>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
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
