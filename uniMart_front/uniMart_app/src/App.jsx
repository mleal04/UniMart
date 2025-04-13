import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/login";
import SignUp from "./assets/sign_up";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
