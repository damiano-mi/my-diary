import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Diary from "./pages/Diary";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import LogIn from "./pages/LogIn";
import { HOME_ROUTE, LOGIN_ROUTE, EDITOR_ROUTE, DIARY_ROUTE, EDITOR_ROUTE_ID, REGISTER_ROUTE } from "./const/routes";
import Register from "./pages/Register";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={LOGIN_ROUTE} element={<LogIn />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path={DIARY_ROUTE} element={<Diary />}></Route>
        <Route path={EDITOR_ROUTE} element={<Editor />}></Route>
        <Route path={EDITOR_ROUTE_ID} element={<Editor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
