import "bootstrap/dist/css/bootstrap.css"
import EditButton from "../components/EditButton"
import { upperCaseFormat } from "../utilities/formats";
import DeleteButton from "./DeleteButton";
import { Post } from "../types/types";

type PostsViewProps = {
    posts: Post[] | any[],
    fetchData: () => void
}

const PostsView: React.FC<PostsViewProps> = (props: PostsViewProps) => {
    return (
        <>
            <div className="row justify-content-center">
                {props.posts.map((post) => (
                    <div key={post.id} className="my-2">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title">{upperCaseFormat(post.title)}</h3>
                                <div className="card-text">{post.timestamp}</div>
                                <div className="card-text ms-2 my-4 p-3 border">{upperCaseFormat(post.body)}</div>
                                <div className="container">
                                    <div className="d-flex justify-content-center">
                                        <DeleteButton id={post.id} onClick={() => props.fetchData()} />
                                        <EditButton id={post.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PostsView;