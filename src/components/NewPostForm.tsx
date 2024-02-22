import { createPost, editPost } from "../services/APIRequests"
import { useNavigate } from "react-router-dom"
import { DIARY_ROUTE } from "../const/routes"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../state/store"

type Props = {
  id: string | undefined
}

export default function NewPostForm({ id }: Props) {

  const user = useSelector((state: RootState) => state.user.user);
  const [post, setPost] = useState({ timestamp: "", title: "", body: "", author: user.name });
  const navigate = useNavigate();

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
    setPost({ ...post, timestamp: date.toLocaleString(), [e.target.name]: e.target.value });
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
