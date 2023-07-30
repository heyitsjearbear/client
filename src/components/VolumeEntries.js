import "./VolumeEntries.css";
import React from "react";

const VolumeEntries = (props) => {
  const entries = props.EntriesList;
  return (
    <div>
      <h2>Entries</h2>
      {entries && entries.length > 0 ? (
        <ul>
          {entries.map((entry) => (
            <li key={entry._id}>
              {entry.date} - {entry.load}x{entry.sets}.{entry.reps}
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities yet</p>
      )}
    </div>
  );
};

export default VolumeEntries;
