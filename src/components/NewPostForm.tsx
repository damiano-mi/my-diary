import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlPosts as SOURCE } from "../const/links";
import { DIARY_ROUTE } from "../const/routes";

export default function NewPostForm({ id }: { id: string | undefined }) {

  const [post, setPost] = useState({ timestamp: "", title: "", body: "", userId: 2 });
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (id) {
      axios.patch(SOURCE + "/" + id, post)
        .then((response) => {
          navigate(DIARY_ROUTE);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    else {
      axios.post(SOURCE, post)
        .then((response) => {
          navigate(DIARY_ROUTE);
        })
        .catch((error) => {
          console.log(error.message);
        });
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
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Enter</button>
        </form>
      </div>
    </>
  );
}
