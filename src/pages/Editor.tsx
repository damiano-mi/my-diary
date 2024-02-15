import "bootstrap/dist/css/bootstrap.css";
import NewPostForm from "../components/NewPostForm";
import { useParams } from "react-router-dom";

export default function Editor() {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <div className="container">
        <NewPostForm id={id} />
      </div>
    </>
  );
}