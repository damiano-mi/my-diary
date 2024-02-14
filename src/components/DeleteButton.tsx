import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { urlUsers as SOURCE } from "../hooks/types";

export default function DeleteButton({ id }: { id: string }) {

    function deletePost(id: string) {
        if (window.confirm("Do you want to remove the #" + id + " post?")) {
            axios.delete(SOURCE + "/" + id)
                .then((response) => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    return (
        <button className="btn btn-danger me-2" onClick={() => deletePost(id)}>🗑</button>
    );
}
