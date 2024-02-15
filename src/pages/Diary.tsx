import useFetch from "../hooks/useFetch";
import "bootstrap/dist/css/bootstrap.css";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { Link } from "react-router-dom";
import { urlPosts as SOURCE } from "../const/links";
import { EDITOR_ROUTE } from "../const/routes";

export default function Diary() {

  const { data: posts, isLoading, error } = useFetch(SOURCE + "?userId=2");
  if (error) return <h1 className="text-center bg-dark my-1 text-white">Error in loading posts</h1>;
  return (
    <>
      <div className="container">
        {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}
        {!isLoading && posts.length <= 0 ? <h1 className="row justify-content-center">Full your diary</h1> : ""}
        {!isLoading && (
          <div className="row justify-content-center">
            {posts.map((post) => (
              <div key={post.id} className="my-2">
                <div className="card shadow">
                  <div className="card-body">
                    <h3 className="card-title">{post.title.charAt(0).toUpperCase() + post.title.slice(1).toLowerCase()}</h3>
                    <div className="card-text">{post.timestamp}</div>
                    <div className="card-text ms-2 my-4 p-3 border">{post.body.charAt(0).toUpperCase() + post.body.slice(1).toLowerCase()}</div>
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <DeleteButton id={post.id} />
                        <EditButton id={post.id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="container my-3">
          <div className="d-flex justify-content-center">
            <Link className="nav-link shadow" to={EDITOR_ROUTE}><button className="btn btn-success">➕</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}