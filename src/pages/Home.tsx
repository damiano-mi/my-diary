import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export default function Home() {
  const {isLogged} = useUserContext();
  return (
    <>
      <div className="container">
        <h1 className="row justify-content-center">Home</h1>
        <div className="container my-3">
          <div className="d-flex justify-content-center">
            {isLogged ? "" : <Link to="/login"><button className="btn btn-primary">Log in</button></Link>}
          </div>
        </div>
      </div>
    </>
  );
}
