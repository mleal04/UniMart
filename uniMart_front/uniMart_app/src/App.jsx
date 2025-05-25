import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/login";
import SignUp from "./assets/sign_up";
import Home from "./assets/home";
import UserProfile from "./assets/user";
import AddInfo from "./assets/adding_info";
import SubmitPost from "./assets/submit_item"; // Capitalized component name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/user" element={<UserProfile />} />
        <Route path="/home/user/userinfo" element={<AddInfo />} />
        <Route path="/home/submit_post" element={<SubmitPost />} /> 
      </Routes>
    </Router>
  );
}

export default App;

