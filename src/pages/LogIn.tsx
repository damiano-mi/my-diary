
import { useState } from "react";
import { Link } from "react-router-dom"
import { urlUsers as SOURCE } from "../const/links";
import { User } from "../const/types";
import useFetch from "../hooks/useFetch";

export default function LogIn() {

    const [user, setUser] = useState({ id: 0, name: "", password: ""});
    const [isDisabled, setIsDisabled] = useState(true);
    const { data } = useFetch(SOURCE);

    function handleSubmit(e: any) {
        const exists = (u : User) => u.name === user.name && u.password===user.password;
        if (data.some(exists)){
            e.preventDefault();
            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
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
                            <h5 className="card-title">Login</h5>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" >Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handlePerson} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handlePerson} />
                                </div>
                                {isDisabled ? <button type="submit" className="btn btn-primary">Login</button> : 
                                <Link to="/diary">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </Link>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
