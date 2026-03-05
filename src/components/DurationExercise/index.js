import React, { useEffect, useRef, useState } from "react";

function pad2(num) {
  return String(num).padStart(2, "0");
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${pad2(minutes)}:${pad2(seconds)}`;
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setSeconds(0);
    setRecords([]);
  }

  function record() {
    setRecords((prev) => [...prev, formatTime(seconds)]);
  }

  const recordLabel = name === "Running" ? "Record Lap" : "Record Rep";
  const itemLabel = name === "Running" ? "Lap" : "Rep";

  return (
    <div>
      <h2 className="title" style={{ fontSize: 40, marginBottom: 12 }}>
        {name}
      </h2>

      <button className="btn secondary" onClick={reset}>
        Reset
      </button>

      <div className="row">
        <button className="btn secondary" onClick={start} disabled={isRunning}>
          Start
        </button>

        <div className="timer">{formatTime(seconds)}</div>

        <button className="btn secondary" onClick={stop} disabled={!isRunning}>
          Stop
        </button>
      </div>

      <div className="row">
        <button className="btn secondary" onClick={record}>
          {recordLabel}
        </button>
      </div>

      {records.length > 0 && (
        <div className="list">
          {records.map((t, idx) => (
            <div key={idx}>
              {itemLabel} {idx + 1}: {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}