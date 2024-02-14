import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { urlUsers as SOURCE } from "../hooks/types";

export default function EditButton({ id }: { id: string }) {

    function editPost(id: string) {
        if (window.confirm("Do you want to edit the #" + id + " post?")) {
            axios.patch(SOURCE + "/" + id,{
                title: "new title",
                body: "new body"
            })
                .then((response) => {
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
