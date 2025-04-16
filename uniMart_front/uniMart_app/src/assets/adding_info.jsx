import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddingInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    university: "",
    major: "",
    graduation_year: "",
    fun_fact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user-info/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("User info added successfully!");
        navigate("/home/user");
      } else {
        alert("Failed to add user info.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding user info.");
    }
  };

  return (
    <div>
      <h1>Adding Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="full_name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>University:</label>
          <input
            type="text"
            name="university"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Major:</label>
          <input type="text" name="major" onChange={handleChange} required />
        </div>
        <div>
          <label>Graduation Year:</label>
          <input
            type="number"
            name="graduation_year"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fun Fact:</label>
          <input type="text" name="fun_fact" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home/user");
          }}
        >
          Go back to User Profile
        </a>
      </p>
    </div>
  );
};

export default AddingInfo;
