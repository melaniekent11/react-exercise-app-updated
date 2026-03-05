import React, { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const EXERCISES = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // =========================
  // SCREEN 1: MAIN MENU
  // =========================
  if (!selectedExercise) {
    return (
      <div className="page">
        <div className="content">
          <h1 className="title">Exercises</h1>

          <div className="stack">
            {EXERCISES.map((ex) => (
              <button
                className="btn"
                key={ex.name}
                onClick={() => setSelectedExercise(ex)}
              >
                {ex.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // SCREEN 2: EXERCISE SCREEN
  // =========================
  return (
    <div className="page">
      <div className="content">
        {selectedExercise.type === "repetition" ? (
          <RepetitionExercise name={selectedExercise.name} />
        ) : (
          <DurationExercise name={selectedExercise.name} />
        )}
      </div>

      {/* Home button at bottom */}
      <button
  className="btn small homeBtn"
  onClick={() => setSelectedExercise(null)}
>
  Home
</button>
    </div>
  );
}