import { createPost, editPost, getPost } from "../services/APIRequests"
import { useNavigate } from "react-router-dom"
import { DIARY_ROUTE } from "../const/routes"
import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { clearPost, setPost, setAuthorPost } from "../state/post/postSlice"

type Props = {
  id: string | undefined
}

export default function NewPostForm({ id }: Props) {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const post = useSelector((state: RootState) => state.post.post);

  useEffect(() => {
    dispatch(setAuthorPost(user.name))
  }, [post]);

  useEffect(() => {
    if (!id) dispatch(clearPost())
    else getPost(id!).then((response) => {
      dispatch(setPost({
        ...post,
        timestamp: response.data.timestamp,
        title: response.data.title,
        body: response.data.body
      }));
    })
  }, [id]);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (id) {
      editPost(id, post).then((response) => { navigate(DIARY_ROUTE) });
    }
    else {
      createPost(post).then((response) => { navigate(DIARY_ROUTE) });
    }
  }

  function handlePost(e: any) {
    const date = new Date();
    dispatch(setPost({ ...post, timestamp: date.toLocaleString(), [e.target.name]: e.target.value }));
  }

  return (
    <>
      <div className="container">
        {id ? <h1>Edit the post ✒</h1> : <h1>Add new post ➕</h1>}
        <form onSubmit={(e) => handleSubmit(e)}>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Title"
              name="title"
              value={post.title}
              onChange={handlePost}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">Text</label>
            <textarea
              className="form-control"
              id="body"
              rows={3}
              placeholder="Enter Text"
              name="body"
              value={post.body}
              onChange={handlePost}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Enter</button>
        </form>
      </div>
    </>
  );
}
