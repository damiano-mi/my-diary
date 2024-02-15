import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
      <div className="container">
        <h1 className="row justify-content-center">Home</h1>
        <div className="container my-3">
          <div className="d-flex justify-content-center">
            <Link to="/login"><button className="btn btn-primary">Log in</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
