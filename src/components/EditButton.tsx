import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const SOURCE = "http://localhost:3030/posts";

export default function EditButton({ id }: { id: number }) {

    function editPost(id: number) {
        if (window.confirm("Do you want to edit the #" + id + " post?")) {
            //console.log(SOURCE + "/?id=" + id);
            axios.patch(SOURCE + "/?id=" + id,{
                title: "new title",
                body: "new body"
            })
                .then((response) => {
                    alert("Edited successfully.");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    return (
        <button className="btn btn-info me-2" onClick={() => editPost(id)}>✒</button>
    );
}
