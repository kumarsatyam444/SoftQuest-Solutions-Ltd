import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NabarSupport from "./components/NabarSupport";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";
import VehicleDetail from "./components/VehicleDetail";

// Component to conditionally render NabarSupport
function AppContent() {
  const location = useLocation();
  const isVehiclesPage = location.pathname === "/vehicles";
  const isVehicleDetailPage = location.pathname.includes("/vehicle/");
  
  // Show search in navbar for both vehicles list and detail pages
  const showSearchInNav = isVehiclesPage || isVehicleDetailPage;

  return (
    <div>
      <Navbar showSearchInNav={showSearchInNav} />
      {!showSearchInNav && <NabarSupport />}
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
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
