import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const user = {
    username: localStorage.getItem("username"),
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/get-items/");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to UniMart! {user?.username}</h1>
        <p>Your one-stop shop for all your needs.</p>
      </header>

      {/* Navigate to user profile */}
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home/user");
          }}
        >
          User Profile
        </a>
      </p>

      {/* Navigate to post submission */}
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home/submit_post");
          }}
        >
          Submit a Post
        </a>
      </p>

      {/* Display items */}
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "2rem" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            {item.image && (
              <img
                src={`http://127.0.0.1:8000${item.image}`}
                alt={item.title}
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </li>
        ))}
      </ul>

      {/* Logout */}
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("username");
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
