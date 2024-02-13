import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
const SOURCE = "http://localhost:3030/posts";

export default function NewPostForm() {

  const [post, setPost] = useState({ id: 0, title: "", body: "" });

  function handleSubmit() {
    axios.post(SOURCE, post)
      .then((response) => {
        alert("Saved successfully");
      })
      .catch((error) => {
        console.error("Error fetching data from the server:", error.message);
      });
  }

  function handlePost(e: any) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container">
        <h1>Add new post:</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Id</label>
            <input
              type="number"
              className="form-control"
              id="id"
              name="id"
              value={post.id}
              onChange={handlePost}
            />
          </div>

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
