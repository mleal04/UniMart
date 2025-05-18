import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user2 =  {
    email: localStorage.getItem("email"),
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: user2.email,
  });
  //create a fucntion to use the data changed by the user
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //create a fucntion to handle the submission even 
  // 1. sending the api requrest to the backend 
  //2. taking action based on the response 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully!");
        //store the username in local storage 
        localStorage.setItem("username", formData.username);
        //redirect the user to the home page
        navigate("/home", { state: { user: formData } });
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //main template view
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
