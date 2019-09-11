import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FiltersList from "./components/FiltersList";
import GalleriesList from "./components/GalleriesList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FiltersList />
        <GalleriesList />
      </main>
    </div>
  );
}

export default App;
