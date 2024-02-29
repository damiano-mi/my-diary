import { HOME_ROUTE, LOGIN_ROUTE, EDITOR_ROUTE, DIARY_ROUTE, EDITOR_ROUTE_ID, REGISTER_ROUTE, PROFILE_ROUTE } from "./const/routes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoute"
import ProtectedLogIn from "./components/ProtectedLogIn"
import SessionRoute from "./components/SessionRoute"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import { Provider } from "react-redux"
import { store } from "./state/store"
import Profile from "./pages/Profile"
import Editor from "./pages/Editor"
import LogIn from "./pages/LogIn"
import Diary from "./pages/Diary"
import Home from "./pages/Home"

export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<SessionRoute />} >
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route element={<ProtectedLogIn />} >
              <Route path={LOGIN_ROUTE} element={<LogIn />} />
              <Route path={REGISTER_ROUTE} element={<Register />} />
            </Route>
            <Route element={<ProtectedRoutes />} >
              <Route path={DIARY_ROUTE} element={<Diary />} />
              <Route path={EDITOR_ROUTE} element={<Editor />} />
              <Route path={EDITOR_ROUTE_ID} element={<Editor />} />
              <Route path={PROFILE_ROUTE} element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
