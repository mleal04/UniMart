import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  //necessary fucntions for REST API
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully!");
        //store the email in local storage
        navigate("/");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //the start of the frontend page 
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevents page from reloading when form is submitted
            navigate("/");
          }}
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUp;
