function FinishScreen({ points, maxScore, highScore, dispatch }) {
  const percentage = (points / maxScore) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👌";
  if (percentage < 50) emoji = "😔";
  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong>{points}</strong> out of {maxScore} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
