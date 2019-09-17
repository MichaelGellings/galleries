import React from "react";
import "./App.css";
import Header from "./components/Header";
import GalleriesList from "./components/GalleriesList";

function App() {
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  function handleFilterChange(filterID, label) {
    console.log(filterID, label);
    let tempFilters = selectedFilters.slice();
    tempFilters.push(filterID);
    setSelectedFilters(tempFilters);
  }
  return (
    <div className="App">
      <Header onFilterChange={handleFilterChange} />
      <GalleriesList selectedFilters={selectedFilters} />
    </div>
  );
}

export default App;
