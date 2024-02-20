import { useUserContext } from "../hooks/useUserContext"
import { HOME_ROUTE } from "../const/routes"
import { Link } from "react-router-dom"

const Profile = () => {

  const { user, logout } = useUserContext();

  return (
    <>
      <div className="container">
        <h1 className="row justify-content-center">{user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase() + "'s profile"}</h1>
        <div className="container my-3">
          <div className="d-flex justify-content-center">
            <Link to={HOME_ROUTE}>
              <button className="btn btn-secondary my-3" onClick={logout}>Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;