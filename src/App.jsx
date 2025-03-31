import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NabarSupport from "./components/NabarSupport";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";

// Component to conditionally render NabarSupport
function AppContent() {
  const location = useLocation();
  const isVehiclesPage = location.pathname === "/vehicles";

  return (
    <div>
      <Navbar showSearchInNav={isVehiclesPage} />
      {!isVehiclesPage && <NabarSupport />}
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
