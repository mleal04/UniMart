import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || {
    username: localStorage.getItem("username"),
  };

  return (
    <div>
      <header>
        <h1>Welcome to UniMart! {user?.username}</h1>
        <p>Your one-stop shop for all your needs.</p>
      </header>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home/user", { state: { username: user.username } });
          }}
        >
          User-Profile
        </a>
      </p>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("username"); // clear username on logout
            navigate("/");
          }}
        >
          Logout
        </a>
      </p>
    </div>
  );
};

export default Home;
