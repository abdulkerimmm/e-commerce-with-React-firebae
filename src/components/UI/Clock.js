import React, { useEffect, useState } from "react";
import "../../styles/clock.css";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let interval;
  const countDown = () => {
    const destination = new Date("jun 23, 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const day = Math.floor(different / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
