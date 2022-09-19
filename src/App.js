import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Register from "./register/Register";
import NewPost from "./NewPost/NewPost";
import Category from "./category/Category";
import Profile from "./Profile/Profile";
import LoginRegister from "./Login/Login";
import Main from "./landingpage/Main";
import Singlepost from "./singlePost/Singlepost";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="login" element={<LoginRegister/>}></Route>
          <Route path="single-view" element={<Singlepost/>}></Route>
          <Route path="admin-dashboard" element={<Dashboard/>}></Route>
          <Route path="new-post" element={<NewPost/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
