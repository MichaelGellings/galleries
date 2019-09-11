import React from "react";
import "./App.css";
import Header from "./components/Header";
import FiltersList from "./components/FiltersList";
import GalleriesList from "./components/GalleriesList";

function App() {
  return (
    <div className="App">
      <Header />
      <GalleriesList />
    </div>
  );
}

export default App;
