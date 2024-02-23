import { upperCaseFormat } from "../utilities/formats"
import PostsView from "../components/PostsView"
import { EDITOR_ROUTE } from "../const/routes"
import { RootState } from "../state/store"
import { useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.css"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { Post } from "../types/types"

export default function Diary() {

  const user = useSelector((state: RootState) => state.user.user);
  const { data: posts, isLoading, error, fetchData } = useFetch<Post>(process.env.REACT_APP_POSTS_BY_AUTHOR_URL + user.name);

  if (error) return <h1 className="text-center bg-dark my-1 text-white">Error in loading posts</h1>;

  return (
    <div className="container">

      {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}

      {!isLoading && posts.length <= 0 
        ?
        <h1 className="row justify-content-center">Fill your diary</h1>
        :
        <h1 className="row justify-content-center">{upperCaseFormat(user.name) + "'s diary"}</h1>
      }

      {!isLoading && (<PostsView posts={posts} fetchData={fetchData} />)}

      <div className="container my-3">
        <div className="d-flex justify-content-center">
          <Link className="nav-link" to={EDITOR_ROUTE}><button className="btn btn-success shadow">➕</button></Link>
        </div>
      </div>

    </div>
  );
}