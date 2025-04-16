import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/login";
import SignUp from "./assets/sign_up";
import Home from "./assets/home";
import UserProfile from "./assets/user";

//here we call all the app templates and assign them to a url route
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/user" element={<UserProfile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
