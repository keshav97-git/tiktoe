import Box from "./box";
import { useState } from "react";
export default function Main() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xkiBari, setXkiBari] = useState(true);
  const handleClick = (i) => {
    const copy = { ...state };
    copy[i] = xkiBari ? "X" : "0";
    setState(copy);
    setXkiBari(!xkiBari);
  };

  const winner = () => {
    const winneLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winneLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const iswinner = winner();

  const restart = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="container">
      {iswinner ? (
        <>
          {iswinner} won the game
          <button onClick={restart}>Play Again</button>
        </>
      ) : (
        <>
          <div className="row">
            <Box onClick={() => handleClick(0)} value={state[0]} />
            <Box onClick={() => handleClick(1)} value={state[1]} />
            <Box onClick={() => handleClick(2)} value={state[2]} />
          </div>

          <div className="row">
            <Box onClick={() => handleClick(3)} value={state[3]} />
            <Box onClick={() => handleClick(4)} value={state[4]} />
            <Box onClick={() => handleClick(5)} value={state[5]} />
          </div>

          <div className="row">
            <Box onClick={() => handleClick(6)} value={state[6]} />
            <Box onClick={() => handleClick(7)} value={state[7]} />
            <Box onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}
