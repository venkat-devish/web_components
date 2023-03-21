import { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  function getFormattedTime(milliSeconds) {
    let totalSeconds = +Math.floor(milliSeconds / 1000);
    let totalMinutes = +Math.floor(totalSeconds / 60);
    let totalHours = +Math.floor(totalMinutes / 60);
    let totalDays = +Math.floor(totalHours / 24);

    let seconds = +totalSeconds % 60;
    let minutes = +totalMinutes % 60;
    let hours = +totalHours % 24;

    return `${totalDays}:${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  return <div>{getFormattedTime(time)}</div>;
};

export default Timer;
