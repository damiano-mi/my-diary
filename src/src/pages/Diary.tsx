import { upperCaseFormat } from "../utilities/formats"
import PostsView from "../components/PostsView"
import { EDITOR_ROUTE } from "../const/routes"
import { AppDispatch, RootState } from "../state/store"
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"
import { setPosts } from "../state/posts/postsSlice"
import { useEffect } from "react"
import { serverAPI } from "../services/serverAPI"

export default function Diary() {

  const user = useSelector((state: RootState) => state.user.user);
  const posts = useSelector((state: RootState) => state.posts.posts);
  //const { data, isLoading, error, fetchData } = useFetch<Post>(process.env.REACT_APP_POSTS_BY_AUTHOR_URL + user.name);
  const useGetPostsByAuthorQuery = serverAPI.endpoints.getPostsByAuthor.useQuery
  const { data, isLoading, error } = useGetPostsByAuthorQuery("?author="+user.name);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => { dispatch(setPosts(data!)); },[data]);

  if (error) return <h1 className="text-center bg-dark my-1 text-white">Error in loading posts</h1>;

  return (
    <div className="container">

      {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}

      {!isLoading && posts && posts.length <= 0 
        ?
        <h1 className="row justify-content-center">Fill your diary</h1>
        :
        <h1 className="row justify-content-center">{upperCaseFormat(user.name) + "'s diary"}</h1>
      }

      {!isLoading && (<PostsView posts={posts}/>)}

      <div className="container my-3">
        <div className="d-flex justify-content-center">
          <Link className="nav-link" to={EDITOR_ROUTE}><button className="btn btn-success shadow">➕</button></Link>
        </div>
      </div>

    </div>
  );
}