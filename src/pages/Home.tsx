import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function App() {

  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <Link to="/login"><button className="btn btn-primary">Log in</button></Link>
      </div>
    </>
  );
}
