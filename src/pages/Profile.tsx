import { useUserContext } from "../hooks/useUserContext"
import { HOME_ROUTE } from "../const/routes"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { Post } from "../types/types";
import { urlPosts as SOURCE } from "../const/links";

const Profile = () => {

  const { user, logout } = useUserContext();
  const { data } = useFetch<Post>(SOURCE + "?author=" + user.name);

  return (
    <>
      <div className="container">
        <h1 className="row justify-content-center">Your Profile</h1>
      </div>
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7">
              <div className="card">
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <p className="navbar-brand">
                      <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" width={100} height={100} alt="propic" />
                    </p>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="mb-1">{user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}</h2>
                      <p className="mb-2 pb-1 ms-1">User</p>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                        <div>
                          <p className="small text-muted mb-1">Posts</p>
                          <p className="mb-0">{data.length}</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <Link to={HOME_ROUTE}>
                          <button className="btn btn-secondary my-3" onClick={logout}>Logout</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Profile;