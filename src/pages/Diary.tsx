import DeleteButton from "../components/DeleteButton"
import EditButton from "../components/EditButton"
import { EDITOR_ROUTE } from "../const/routes"
import "bootstrap/dist/css/bootstrap.css"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { Post } from "../types/types"
import { useSelector } from "react-redux"
import { RootState } from "../state/store"

export default function Diary() {
  /*
  const dispatch = useDispatch<AppDispatch>();
  const currentPosts = useSelector((state: RootState) => state.posts.posts);
  dispatch(setCurrentPosts(posts));
  */
  
  const user = useSelector((state: RootState) => state.user.user);
  const { data: posts, isLoading, error, fetchData } = useFetch<Post>(process.env.REACT_APP_POSTS_BY_AUTHOR_URL + user.name);
  
  if (error) return <h1 className="text-center bg-dark my-1 text-white">Error in loading posts</h1>;

  return (
    <>
      <div className="container">
        {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}
        {!isLoading && posts.length <= 0 ? <h1 className="row justify-content-center">Fill your diary</h1> :
          <h1 className="row justify-content-center">{user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase() + "'s diary"}</h1>}
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
                        <DeleteButton id={post.id} onClick={() => fetchData()} />
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
            <Link className="nav-link" to={EDITOR_ROUTE}><button className="btn btn-success shadow">➕</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}