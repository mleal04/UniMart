import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
    seller_username: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("title", formData.title);
  data.append("description", formData.description);
  data.append("price", formData.price);
  data.append("image", formData.image);
  data.append("seller_username", formData.seller_username);

  try {
    const response = await fetch("http://127.0.0.1:8000/api/submit/", {
      method: "POST",
      body: data, // No JSON.stringify!
      // Don't set Content-Type manually — browser handles it
    });

    if (response.ok) {
      alert("Item submitted successfully!");
      navigate("/home");
    } else {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      alert("Submission failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div>
      <h1>Submit an Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <div>
          <label>Seller Username:</label>
          <input
            type="text"
            name="seller_username"
            value={formData.seller_username}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >
          Go back home
        </a>
      </p>
    </div>
  );
};

export default SubmitItem;

