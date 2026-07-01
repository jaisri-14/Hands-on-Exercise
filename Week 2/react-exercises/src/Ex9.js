import React from "react";
import ReactDOM from "react-dom/client";

// Change the flag to true or false
const flag = true;

// -------------------- ListofPlayers --------------------
function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 67 },
    { name: "KL Rahul", score: 58 },
    { name: "Hardik Pandya", score: 74 },
    { name: "Ravindra Jadeja", score: 82 },
    { name: "Rishabh Pant", score: 65 },
    { name: "Mohammed Shami", score: 45 },
    { name: "Jasprit Bumrah", score: 76 },
    { name: "Kuldeep Yadav", score: 60 },
    { name: "Mohammed Siraj", score: 72 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Players with Scores Below 70</h3>

      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

// -------------------- IndianPlayers --------------------
function IndianPlayers() {
  const team = [
    "Virat Kohli",
    "Rohit Sharma",
    "Shubman Gill",
    "KL Rahul",
    "Hardik Pandya",
    "Ravindra Jadeja"
  ];

  const [p1, p2, p3, p4, p5, p6] = team;

  const oddPlayers = [p1, p3, p5];
  const evenPlayers = [p2, p4, p6];

  const T20Players = [
    "Suryakumar Yadav",
    "Tilak Varma",
    "Sanju Samson"
  ];

  const RanjiPlayers = [
    "Cheteshwar Pujara",
    "Hanuma Vihari",
    "Mayank Agarwal"
  ];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 & Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

// -------------------- App --------------------
function App() {
  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);