import { DIARY_ROUTE, EDITOR_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from "../const/routes"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"
import "bootstrap/dist/js/bootstrap.js"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#053761" }}>
                <div className="container">
                    <Link className="navbar-brand" to={HOME_ROUTE}>
                        <div className="container">
                            <p className="navbar-brand">
                                <img src="https://www.svgrepo.com/show/286823/diary.svg" width={36} height={36} alt="Logo" />
                            </p>
                        </div>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={HOME_ROUTE}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={DIARY_ROUTE}>Diary</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={EDITOR_ROUTE}>Write new post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={PROFILE_ROUTE}>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
