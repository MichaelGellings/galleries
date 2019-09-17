import React from "react";
import "./App.css";
import Header from "./components/Header";
import GalleriesList from "./components/GalleriesList";

function App() {
  const [selectedFilter, setSelectedFiler] = React.useState(null);
  function handleFilterChange(filterID, label) {
    console.log(filterID, label);
    setSelectedFiler(filterID);
  }
  return (
    <div className="App">
      <Header onFilterChange={handleFilterChange} />
      <GalleriesList selectedFilter={selectedFilter} />
    </div>
  );
}

export default App;
