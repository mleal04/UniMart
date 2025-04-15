import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Welcome to UniMart!</h1>
        <p>Your one-stop shop for all your needs.</p>
      </header>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Lougout
        </a>
      </p>
    </div>
  );
};

export default Home;
