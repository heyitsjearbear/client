import React from "react";
import { useState } from "react";
import NewEntryForm from "./components/NewEntryForm"
import "./App.css";
import VolumeEntries from "./components/VolumeEntries";

const App = () => {
  const [entries, setEntries] = useState([]);
  return (
    <div className="app">
      <NewEntryForm />
      <VolumeEntries entriesList = {entries}/>
    </div>
  );
};

export default App;
