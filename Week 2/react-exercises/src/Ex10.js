import React from "react";
import ReactDOM from "react-dom/client";

function OfficeSpaceRental() {
  // Office Object
  const office = {
    name: "Skyline Business Center",
    rent: 55000,
    address: "Anna Nagar, Chennai",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
  };

  // List of Office Objects
  const officeList = [
    {
      name: "Skyline Business Center",
      rent: 55000,
      address: "Anna Nagar, Chennai"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "OMR, Chennai"
    },
    {
      name: "Elite Workspace",
      rent: 45000,
      address: "T. Nagar, Chennai"
    },
    {
      name: "Corporate Hub",
      rent: 90000,
      address: "Guindy, Chennai"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img
        src={office.image}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Featured Office</h2>
      <p>
        <strong>Name:</strong> {office.name}
      </p>

      <p>
        <strong>Rent:</strong>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p>
        <strong>Address:</strong> {office.address}
      </p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{item.name}</h3>

          <p>
            <strong>Rent:</strong>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{item.rent}
            </span>
          </p>

          <p>
            <strong>Address:</strong> {item.address}
          </p>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<OfficeSpaceRental />);