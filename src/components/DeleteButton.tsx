import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { urlPosts as SOURCE } from "../const/links";
import { Post } from "../types/types";

interface DeleteButtonProps {
    id: string,
    data: Post[],
    setPosts: React.Dispatch<React.SetStateAction<any[]>>
}

const DeleteButton: React.FC<DeleteButtonProps> = (props: DeleteButtonProps) => {
    function deletePost(id: string) {

        if (window.confirm("Do you want to remove this post?")) {
            axios.delete(SOURCE + "/" + id)
                .then((response) => {
                    const remaining = props.data.filter((post) => post.id !== id)
                    props.setPosts(remaining);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    return (
        <button className="btn btn-danger me-2" onClick={() => deletePost(props.id)}>🗑</button>
    );
}

export default DeleteButton;