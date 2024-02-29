import { serverAPI, useCreateUserMutation } from "../services/serverAPI"
import { useNavigate } from "react-router-dom"
import { LOGIN_ROUTE } from "../const/routes"
import { Link } from "react-router-dom"
import { User } from "../types/types"
import { useState } from "react"
import md5 from "md5"

export default function Register() {

    const [user, setUser] = useState({ name: "", password: "" });
    //const { data } = useFetch<User>(process.env.REACT_APP_USERS_URL!);
    const useGetUsersQuery = serverAPI.endpoints.getUsers.useQuery
    const { data } = useGetUsersQuery();
    const navigate = useNavigate();
    const [createUser] = useCreateUserMutation();
    function handleSubmit(e: any) {
        e.preventDefault();
        const exists = (u: User) => u.name === user.name;
        if (data && !data.some(exists)) {
            createUser({ name: user.name, password: md5(user.password) })
            navigate(LOGIN_ROUTE)
            /*
            createUser({ name: user.name, password: md5(user.password) })
                .then((response) => {
                    navigate(LOGIN_ROUTE);
                })
            */
        }
        else {
            alert("Name taken");
            setUser({ name: "", password: "" });
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
                            <h5 className="card-title">Register</h5>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" >Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handlePerson} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handlePerson} required />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-info">Register</button>
                                </div>
                            </form>
                            <div className="my-3">
                                <Link to={LOGIN_ROUTE}><p>Log in here</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
