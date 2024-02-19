import "bootstrap/dist/css/bootstrap.css";
import request from "../services/APIRequests";
import { urlPosts as SOURCE } from "../const/links";

interface DeleteButtonProps {
    id: string,
    onClick: () => void
}

const DeleteButton: React.FC<DeleteButtonProps> = (props: DeleteButtonProps) => {
    function deletePost(id: string) {

        if (window.confirm("Do you want to remove this post?")) {
            request("delete", SOURCE + "/" + id, "")
                .then((response) => {
                    props.onClick();
                })
        }
    };

    return (
        <button className="btn btn-danger me-2" onClick={() => deletePost(props.id)}>🗑</button>
    );
}

export default DeleteButton;