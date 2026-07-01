import React, { useState } from "react";

export default function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  // Generate Reference Number
  const generateRefNumber = () => {
    return "REF-" + Math.floor(100000 + Math.random() * 900000);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const refNo = generateRefNumber();

    alert(
      `Complaint Registered Successfully!\n\nEmployee: ${employeeName}\nComplaint: ${complaint}\nReference No: ${refNo}`
    );

    // Clear form after submit
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Complaint Register</h2>

      <form onSubmit={handleSubmit}>
        {/* Employee Name */}
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <br />

        {/* Complaint Textarea */}
        <div>
          <label>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="5"
            required
          />
        </div>

        <br />

        {/* Submit Button */}
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}