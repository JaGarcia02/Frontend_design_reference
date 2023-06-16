import React from "react";

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"} `}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"} `}>
        Y - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
