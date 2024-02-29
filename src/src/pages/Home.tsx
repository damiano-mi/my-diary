import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

export default function Home() {

  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  return (
    <>
      <div className="container">
        <h1 className="row justify-content-center">Home</h1>
        <div className="container my-3">
          <div className="d-flex justify-content-center">
            {isLogged ? "" : <Link to="/login"> <button className="btn btn-primary">Log in</button> </Link>}
          </div>
        </div>
      </div>
    </>
  );
}
