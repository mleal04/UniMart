import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/login";
import SignUp from "./assets/sign_up";
import Home from "./assets/home";

//here we call all the app templates and assign them to a url route
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
