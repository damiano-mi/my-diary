import useFetch from "../hooks/useFetch";
import "bootstrap/dist/css/bootstrap.css";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { Link } from "react-router-dom";
import { Post, urlUsers as SOURCE, User } from "../hooks/types";

export default function App() {

  const { data: users, isLoading, error } = useFetch(SOURCE + "?name=charlie"); //http://localhost:3030/users?name=user
  if (error) return <h1 className="text-center bg-dark my-1 text-white">Error in loading posts</h1>;
  return (
    <>
      <div className="container">
        {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}
        {!isLoading && (
          <div className="row justify-content-center">
            {users.map((user) => (
              <>
                <h1 className="my-1">{user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase() + "'s diary"}</h1>
                {user.posts?.map((post) => (
                  <div key={user.name} className="my-2">
                    <div className="card shadow">
                      <div className="card-body">
                        <h3 className="card-title">{post.title.charAt(0).toUpperCase() + post.title.slice(1).toLowerCase()}</h3>
                        <div className="card-text">{post.id}</div>
                        <div className="card-text ms-2 my-4 p-3 border">{post.body.charAt(0).toUpperCase() + post.body.slice(1).toLowerCase()}</div>
                        <div className=""><DeleteButton id={post.id} /><EditButton id={post.id} /></div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        )}
        <Link className="nav-link my-1" to="/editor"><button className="btn btn-success">Add</button></Link>
      </div>
    </>
  );
}