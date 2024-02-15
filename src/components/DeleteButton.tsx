import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { urlPosts as SOURCE } from "../const/links";

export default function DeleteButton({ id }: { id: string }) {

    function deletePost(id: string) {
        if (window.confirm("Do you want to remove this post?")) {
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
