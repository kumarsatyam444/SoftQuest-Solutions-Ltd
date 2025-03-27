import React from "react";
import Navbar from "./components/Navbar";
import NabarSupport from "./components/NabarSupport";
import Home from "./components/Home";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <NabarSupport />
      <div className="flex">
        <Home />
      </div>
    </div>
  );
}

export default App;
