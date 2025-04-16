import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username =
    location.state?.username || localStorage.getItem("username") || "";

  const [greeting, setGreeting] = useState("...");

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/sayhi/?username=${username}`
        );
        const data = await response.json();
        if (response.ok) {
          setGreeting(data.message); // message should be user's name
        } else {
          setGreeting("Guest");
        }
      } catch (error) {
        console.error("Error fetching greeting:", error);
        setGreeting("Guest");
      }
    };

    if (username) {
      fetchGreeting();
    }
  }, [username]);

  return (
    <div>
      <h1>Hello {greeting}</h1>
      <p>Welcome to the User component!</p>
      <div>user card : {greeting}</div>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home/user/userinfo");
          }}
        >
          add to you personal card
        </a>
      </p>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >
          Go back to all listings
        </a>
      </p>
    </div>
  );
};

export default User;
