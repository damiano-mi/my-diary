import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Diary from "./pages/Diary";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import LogIn from "./pages/LogIn";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path='/diary' element={<Diary />}></Route>
        <Route path='/editor' element={<Editor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
