import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);
  const time = new Date(secondsRemaining * 1000);
  const formatter = new Intl.DateTimeFormat("en", {
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  });
  return <div className="timer">{formatter.format(time)}</div>;
}

export default Timer;
