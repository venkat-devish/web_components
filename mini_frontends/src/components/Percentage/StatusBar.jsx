import React, { useEffect, useState } from "react";
import "./status.scss";

const StatusBar = () => {
  const [status, setStatus] = useState(0);

  function increment() {
    setInterval(() => {
      setStatus((prev) => (prev < 100 ? prev + 10 : prev));
    }, 800);
  }

  function reset() {
    setStatus(0);
  }

  return (
    <>
      <button className="button button-1" onClick={() => reset()}>
        Reload
      </button>
      <div className="status">
        <div className="bar" style={{ width: `${status}% ` }}>
          <span>{status}%</span>
        </div>
      </div>
      <button className="button" onClick={() => increment()}>
        Increase
      </button>
    </>
  );
};

export default StatusBar;
