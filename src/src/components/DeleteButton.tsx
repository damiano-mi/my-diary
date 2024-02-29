import "bootstrap/dist/css/bootstrap.css"
import { useDeletePostMutation } from "../services/serverAPI"

type DeleteButtonProps = {
    id: string
}

const DeleteButton: React.FC<DeleteButtonProps> = (props: DeleteButtonProps) => {

    const [deletePost] = useDeletePostMutation();
    
    function handleDelete(id: string) {

        if (window.confirm("Do you want to remove this post?")) {
            deletePost(id)
        }
    };

    return (
        <button className="btn btn-danger me-2"
            onClick={() => handleDelete(props.id)}>🗑
        </button>
    );
}

export default DeleteButton;