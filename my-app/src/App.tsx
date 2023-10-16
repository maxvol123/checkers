import { useState } from "react";

function App() {
  function Chessboard() {
    const renderChessboard = () => {
      const chessboard = [];
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const isBlack = (i + j) % 2 === 1;
          chessboard.push(
            <div key={`${i}-${j}`} className={`cell ${isBlack ? "black" : ""}`} />
          );
        }
      }
      return chessboard;
    };
  
    return <div className="chessboard">{renderChessboard()}</div>;
  }
  return (
    <div className="">{Chessboard()}</div>
  );
}

export default App;
