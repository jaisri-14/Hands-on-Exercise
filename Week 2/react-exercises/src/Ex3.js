import React from "react";

// Styling inside same file (no CSS file needed)
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    border: "2px solid #333",
    width: "400px",
    margin: "20px auto",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    color: "#2c3e50",
  },
};

// Function Component
function CalculateScore({ name, school, total, goal }) {
  const average = total / goal;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Score Calculator</h2>

      <p><b>Name:</b> {name}</p>
      <p><b>School:</b> {school}</p>
      <p><b>Total Marks:</b> {total}</p>
      <p><b>Goal Subjects:</b> {goal}</p>

      <hr />

      <h3>Average Score: {average}</h3>
    </div>
  );
}

// Main Component (renders everything)
function Ex3() {
  return (
    <div>
      <CalculateScore
        name="Jaisri"
        school="ABC School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default Ex3;