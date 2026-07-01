import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let tempErrors = {};

    // Name validation
    if (name.length < 5) {
      tempErrors.name = "Name must be at least 5 characters";
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      tempErrors.email = "Email must contain @ and .";
    }

    // Password validation
    if (password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
    }

    setErrors(tempErrors);

    // If no errors
    return Object.keys(tempErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>Mail Register Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}