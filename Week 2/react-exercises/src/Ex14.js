import React, { useState, createContext, useContext } from "react";

/* 1. Create Context */
const ThemeContext = createContext("light");

/* Employee Card Component */
function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <button className={theme}>View</button>
      <button className={theme}>Edit</button>
    </div>
  );
}

/* Employee List Component */
function EmployeeList({ employees }) {
  return (
    <div>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

/* Main App Component */
export default function App() {
  const [theme, setTheme] = useState("light");

  const employees = [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "Sara", role: "Designer" },
    { id: 3, name: "Mike", role: "Manager" }
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Employee Management System</h1>

        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>

        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}