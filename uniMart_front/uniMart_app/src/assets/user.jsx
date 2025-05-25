import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const [userCard, setUserCard] = useState(null); // store user card info
  const [message, setMessage] = useState("...");   // store message if needed

 useEffect(() => {
  const fetchGreeting = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/sayhi/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });

        const data = await response.json();

        if (response.ok) {
          setUserCard(data);
          setMessage("");
        } else {
          setUserCard(null);
          setMessage(data.message || "Guest");
        }
      } catch (error) {
        console.error("Error fetching greeting:", error);
        setUserCard(null);
        setMessage("Guest");
      }
    };

    if (username) {
      fetchGreeting();
    }
  }, [username]);

  return (
    <div>
      {/* Begin with the user name */}
      <h1>Hello {username}</h1>
      <p>Welcome to the User component!</p>

      {/* Show the current user-card info */}
      <div>
        {userCard ? (
          <div>
            <h2>Your Card</h2>
            <p><strong>Name:</strong> {userCard.full_name}</p>
            <p><strong>Username:</strong> {userCard.username}</p>
            <p><strong>Email:</strong> {userCard.email}</p>
            <p><strong>University:</strong> {userCard.university}</p>
            <p><strong>Major:</strong> {userCard.major}</p>
            <p><strong>Graduation Year:</strong> {userCard.graduation}</p>
            <p><strong>Fun Fact:</strong> {userCard.fun_fact}</p>
            <p>{message}</p>
            <p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home/user/userinfo");
                }}
              >
                Change your personal card
              </a>
            </p>
          </div>
        ) : (
          <div>
            <p>{message}</p>
            <p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home/user/userinfo");
                }}
              >
                Add your personal card
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Link to go back */}
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
