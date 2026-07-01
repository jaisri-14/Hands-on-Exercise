import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./Ex4";
import Ex5 from "./Ex5";
import Ex6 from "./Ex6";
import Ex7 from "./Ex7";
import Ex8 from "./Ex8";
import Ex9 from "./Ex9";
import Ex10 from "./Ex10";
import Ex11 from "./Ex11";
import Ex12 from "./Ex12";
import Ex13 from "./Ex13";
import Ex14 from "./Ex14";
import Ex15 from "./Ex15";
import Ex16 from "./Ex16";
import Ex17 from "./Ex17";
import Ex18 from "./Ex18";
import Ex19 from "./Ex19";

const exercises = {
  1: Ex1,
  2: Ex2,
  3: Ex3,
  4: Ex4,
  5: Ex5,
  6: Ex6,
  7: Ex7,
  8: Ex8,
  9: Ex9,
  10: Ex10,
  11: Ex11,
  12: Ex12,
  13: Ex13,
  14: Ex14,
  15: Ex15,
  16: Ex16,
  17: Ex17,
  18: Ex18,
  19: Ex19,
};

// 👇 ONLY CHANGE THIS NUMBER
const currentExercise = 1;

function App() {
  const Selected = exercises[currentExercise];
  return <Selected />;
}

export default App;