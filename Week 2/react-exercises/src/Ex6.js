import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";

/* ---------------- MOCK DATA ---------------- */
const trainers = [
  {
    id: 1,
    name: "Arun",
    email: "arun@gmail.com",
    phone: "9876543210",
    technology: "React",
    skills: "JS, React",
  },
  {
    id: 2,
    name: "Kiran",
    email: "kiran@gmail.com",
    phone: "9876501234",
    technology: "Java",
    skills: "Core Java, Spring",
  },
  {
    id: 3,
    name: "Meena",
    email: "meena@gmail.com",
    phone: "9123456780",
    technology: "Python",
    skills: "Django, ML",
  },
];

/* ---------------- HOME COMPONENT ---------------- */
function Home() {
  return (
    <div>
      <h1>Welcome to Trainers App</h1>
      <p>This is Home Page</p>
    </div>
  );
}

/* ---------------- TRAINERS LIST ---------------- */
function TrainersList() {
  return (
    <div>
      <h2>Trainers List</h2>

      <ul>
        {trainers.map((t) => (
          <li key={t.id}>
            <Link to={`/trainer/${t.id}`}>{t.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- TRAINER DETAILS ---------------- */
function TrainerDetails() {
  const { id } = useParams();

  const trainer = trainers.find((t) => t.id === parseInt(id));

  if (!trainer) {
    return <h2>Trainer Not Found</h2>;
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <p><b>Name:</b> {trainer.name}</p>
      <p><b>Email:</b> {trainer.email}</p>
      <p><b>Phone:</b> {trainer.phone}</p>
      <p><b>Technology:</b> {trainer.technology}</p>
      <p><b>Skills:</b> {trainer.skills}</p>
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */
function Ex6() {
  return (
    <BrowserRouter>
      <div>

        {/* NAVIGATION */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/trainers">Trainers</Link>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default Ex6;