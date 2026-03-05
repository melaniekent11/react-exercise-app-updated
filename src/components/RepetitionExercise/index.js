import React, { useState } from "react";

export default function RepetitionExercise({ name }) {
  const [reps, setReps] = useState(0);
  const [records, setRecords] = useState([]);

  function recordRep() {
    setReps((prev) => {
      const next = prev + 1;
      setRecords((r) => [...r, next]);
      return next;
    });
  }

  function reset() {
    setReps(0);
    setRecords([]);
  }

  return (
    <div>
      <h2 className="title" style={{ fontSize: 40, marginBottom: 12 }}>
        {name}
      </h2>

      <button className="btn secondary" onClick={reset}>
        Reset
      </button>

      <div className="row">
        <button className="btn secondary" onClick={recordRep}>
          Record Rep
        </button>

        <div className="timer">
          Reps: {String(reps).padStart(2, "0")}
        </div>
      </div>

      {records.length > 0 && (
        <div className="list">
          {records.map((val, idx) => (
            <div key={idx}>Rep {idx + 1}: {val}</div>
          ))}
        </div>
      )}
    </div>
  );
}