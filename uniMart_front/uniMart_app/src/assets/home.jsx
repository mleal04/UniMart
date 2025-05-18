import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //use navigate
  const navigate = useNavigate();
  //grab the necessary items from local storage 
  const user =  {
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
            navigate("/home/user");
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
