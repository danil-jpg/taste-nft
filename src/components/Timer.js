import React, { useEffect, useState } from "react";

const Timer = ({ date }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = date;
  // const deadline = "05, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setHours(Math.floor(time / (1000 * 60 * 60)));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card__sub-descr-bottom_timer-wr">
      <p className="card_hours">{hours}h</p>
      <p className="card__mins">{minutes}m</p>
      <p className="card__secs">{seconds}s</p>
    </div>
  );
};

export default Timer;
