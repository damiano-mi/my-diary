import { deletePost } from "../services/APIRequests"
import "bootstrap/dist/css/bootstrap.css"

interface DeleteButtonProps {
    id: string,
    onClick: () => void
}

const DeleteButton: React.FC<DeleteButtonProps> = (props: DeleteButtonProps) => {

    function handleDelete(id: string) {

        if (window.confirm("Do you want to remove this post?")) {
            deletePost(id)
                .then((response) => {
                    props.onClick();
                })
        }
    };

    return (
        <button className="btn btn-danger me-2"
            onClick={() => handleDelete(props.id)}>🗑
        </button>
    );
}

export default DeleteButton;