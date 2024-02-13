import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const SOURCE = "http://localhost:3030/posts";

export default function DeleteButton({ id }: { id: number }) {

    function deletePost(id: number) {
        if (window.confirm("Do you want to remove the #" + id + " post?")) {
            //console.log(SOURCE + "/?id=" + id);
            axios.delete(SOURCE + "/?id=" + id)
                .then((response) => {
                    alert("Removed successfully.");
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
