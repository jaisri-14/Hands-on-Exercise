import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails() {
  const cohorts = [
    { id: 1, name: "React Basics", status: "ongoing" },
    { id: 2, name: "Java Full Stack", status: "completed" },
    { id: 3, name: "Node JS", status: "completed" },
    { id: 4, name: "UI/UX", status: "ongoing" },
  ];

  return (
    <div>
      {cohorts.map((cohort) => (
        <div key={cohort.id} className={styles.box}>
          <h3>{cohort.name}</h3>

          {/* conditional styling */}
          <p
            style={{
              color: cohort.status === "ongoing" ? "green" : "blue",
            }}
          >
            Status: {cohort.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;