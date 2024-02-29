import { EDITOR_ROUTE } from "../const/routes"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"

type Props = {
    id: string
}

export default function EditButton({ id }: Props) {

    return (
        <Link className="nav-link"
            to={EDITOR_ROUTE + "/" + id}>
            <button className="btn btn-info">✒</button>
        </Link>

    );
}
