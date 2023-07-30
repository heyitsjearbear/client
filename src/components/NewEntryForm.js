import React from "react";
import "./NewEntryForm.css";
const newEntryForm = () => {
  return (
    <div className="heading">
      <h1>Volume Tracker Visualization</h1>
      <form className="new-entry">
        <label for="date-entry">Date:</label>
        <input type="date" id="date-entry" name="date-entry" />
        <div className="radio-buttons">
          <input type="radio" id="squat" name="sbd" value="squat" />
          <label htmlFor="squat">squat</label>
          <input type="radio" id="bench" name="sbd" value="bench" />
          <label htmlFor="bench">bench</label>
          <input type="radio" id="deadlift" name="sbd" value="deadlift" />
          <label htmlFor="deadlift">deadlift</label>
        </div>
        <div className="vol-fields">
          <label htmlFor="load">Load:</label>
          <input type="number" id="load" name="load" />
          <label htmlFor="sets">Sets:</label>
          <input type="number" id="sets" name="sets" />
          <label htmlFor="reps">Reps:</label>
          <input type="number" id="reps" name="reps" />
        </div>
      </form>
    </div>
  );
};

export default newEntryForm;
