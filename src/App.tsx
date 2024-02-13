import useFetch from "./hooks/useFetch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NewPostForm from "./components/NewPostForm";
import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";
const SOURCE = "http://localhost:3030/posts";

export default function App() {

  const { data: posts, isLoading, error } = useFetch(SOURCE);

  if (error) return <h1 className="text-center bg-dark my-1 text-white">Error in loading posts</h1>;

  return (
    <>
      <div className="container">
        <h1>My diary</h1>
        {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}
        {!isLoading && (
          <div className="row justify-content-center">
            {posts.map((post) => (
              <div key={post.id} className="my-2">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      <span>{post.id}</span> {post.title}
                    </h3>
                    <p className="card-text">{post.body}</p>
                    <DeleteButton id={post.id} />
                    <EditButton id={post.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NewPostForm />
    </>
  );
}
