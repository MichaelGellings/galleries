import React from "react";
import "./App.css";
import Header from "./components/Header";
import GalleriesList from "./components/GalleriesList";

function App() {
  function handleFilterChange(filter, label) {
    console.log(filter, label);
  }
  return (
    <div className="App">
      <Header onFilterChange={handleFilterChange} />
      <GalleriesList />
    </div>
  );
}

export default App;
