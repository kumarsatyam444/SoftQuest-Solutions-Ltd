import React, { useState } from "react";
import vehiclesData from "../data/vehicles.json";

function VehiclesCards() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="w-full">
      {/* View Toggle Buttons */}
      <div className="flex justify-between items-center">
        <div className="p-4 text-center text-md text-gray-600 font-[600]">
          Trending ads
        </div>
        <div className="flex justify-end p-4 space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded w-[40px] ${
              viewMode === "grid" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            <img
              src={
                viewMode === "grid"
                  ? "/icons/menu-active.png"  // Use original icon
                  : "/icons/menu.png"
              }
              alt="Grid View"
            />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded w-[40px] ${
              viewMode === "list" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            <img 
              src={
                viewMode === "list"
                  ? "/icons/active-line-menu.png"  // Use original icon
                  : "/icons/line-menu.png"
              }
              alt="List View"
            />
          </button>
        </div>
      </div>

      {/* Vehicles Display */}
      {viewMode === "grid" ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
          {vehiclesData.vehicles.map((vehicle, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <GridViewCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4 p-4 w-full">
          {vehiclesData.vehicles.map((vehicle, index) => (
            <ListViewCard vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
}

function GridViewCard({ vehicle }) {
  // Format the details text to avoid excessive repetition
  const formatDetails = (text) => {
    if (!text) return "";

    // Split into sentences or phrases
    const parts = text.split(/[,.]/).filter((part) => part.trim().length > 0);

    // Remove duplicates by converting to lowercase and comparing
    const uniqueParts = [];
    const seen = new Set();

    for (const part of parts) {
      const trimmed = part.trim();
      const lower = trimmed.toLowerCase();

      if (!seen.has(lower) && trimmed.length > 0) {
        seen.add(lower);
        uniqueParts.push(trimmed);
      }
    }

    // Join back with proper formatting
    return uniqueParts.join(". ") + (uniqueParts.length > 0 ? "." : "");
  };

  // Array of available car images
  const carImages = [
    "/vehilcleImg/blackToyota.png",
    "/vehilcleImg/merc.png",
    "/vehilcleImg/redToyota.png",
    "/vehilcleImg/whiteLexus.png"
  ];

  // Get a random image
  const getCarImage = () => {
    return carImages[Math.floor(Math.random() * carImages.length)];
  };
  
  // Generate random styling for cards - updated to use gold and black
  const getRandomStyling = () => {
    const random = Math.random();
    
    // Border styles - gold, black, or none
    let borderStyle = "";
    if (random < 0.15) {
      borderStyle = "border-[#FFD700] border-2"; // Gold border (15% chance)
    } else if (random < 0.3) {
      borderStyle = "border-black border-2"; // Black border (15% chance)
    } else {
      borderStyle = "border border-gray-200"; // Default border (70% chance)
    }
    
    // Background tint - apply to some cards
    let bgStyle = "";
    if (random < 0.1) {
      bgStyle = "bg-[#FFF8E1]"; // Very light gold (10% chance)
    } else if (random < 0.17) {
      bgStyle = "bg-[#FFFDE7]"; // Lighter gold (7% chance)
    } else if (random < 0.22) {
      bgStyle = "bg-gray-50"; // Light gray (5% chance)
    } else {
      bgStyle = "bg-white"; // Default white (78% chance)
    }
    
    return `${borderStyle} ${bgStyle}`;
  };

  const randomStyling = getRandomStyling();
  const formattedDetails = formatDetails(vehicle.details);

  return (
    <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col ${randomStyling}`}>
      {/* Image Section */}
      <div className="relative aspect-[4/3]">
        <img
          src={getCarImage()}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/car.png";
            e.target.onerror = null;
          }}
        />
        <div className="absolute top-2 right-2 bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium">
          Verified ID
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold mb-1">{vehicle.name}</h2>

        <p className="text-gray-600 mb-2 text-sm max-h-20 overflow-y-auto">
          {formattedDetails}
        </p>

        {/* Tags - updated colors */}
        <div className="mb-3 flex flex-wrap gap-2">
          <span
            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
              vehicle.condition === "Foreign Used"
                ? "bg-[#FFF8E1] text-[#B8860B]"  // Light gold bg with darker gold text
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {vehicle.condition}
          </span>
          <span className="inline-block bg-gray-100 px-2 py-1 rounded text-xs font-medium">
            {vehicle.type}
          </span>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm mt-auto">{vehicle.address}</p>
      </div>
    </div>
  );
}

// List View Card Component
function ListViewCard({ vehicle }) {
  // Format the details text to avoid excessive repetition
  const formatDetails = (text) => {
    if (!text) return "";

    // Split into sentences or phrases
    const parts = text.split(/[,.]/).filter((part) => part.trim().length > 0);

    // Remove duplicates by converting to lowercase and comparing
    const uniqueParts = [];
    const seen = new Set();

    for (const part of parts) {
      const trimmed = part.trim();
      const lower = trimmed.toLowerCase();

      if (!seen.has(lower) && trimmed.length > 0) {
        seen.add(lower);
        uniqueParts.push(trimmed);
      }
    }

    // Join back with proper formatting
    return uniqueParts.join(", ");
  };

  // Array of available car images
  const carImages = [
    "/vehilcleImg/blackToyota.png",
    "/vehilcleImg/merc.png",
    "/vehilcleImg/redToyota.png",
    "/vehilcleImg/whiteLexus.png"
  ];

  // Get a random image
  const getCarImage = () => {
    return carImages[Math.floor(Math.random() * carImages.length)];
  };
  
  // Generate a random kilometer value
  const getRandomKm = () => {
    return Math.floor(Math.random() * 400000) + 50000;
  };

  // Random price generator (in millions)
  const getRandomPrice = () => {
    const basePrice = Math.floor(Math.random() * 25) + 3;
    return basePrice * 1000000;
  };

  // Generate random styling for list cards - updated to use gold and black
  const getRandomCardStyling = () => {
    const random = Math.random();
    
    // Border styles - gold, black, or default
    let borderStyle = "border border-gray-200"; // Default
    if (random < 0.15) {
      borderStyle = "border-2 border-[#FFD700]"; // Gold border (15% chance)
    } else if (random < 0.3) {
      borderStyle = "border-2 border-black"; // Black border (15% chance)
    }
    
    // Background tint - apply to some cards
    let bgStyle = "bg-white"; // Default
    if (random < 0.1) {
      bgStyle = "bg-[#FFF8E1]"; // Very light gold (10% chance)
    } else if (random < 0.17) {
      bgStyle = "bg-[#FFFDE7]"; // Lighter gold (7% chance)
    } else if (random < 0.22) {
      bgStyle = "bg-gray-50"; // Light gray (5% chance)
    }
    
    return `${borderStyle} ${bgStyle}`;
  };

  const formattedDetails = formatDetails(vehicle.details);
  const randomKm = getRandomKm();
  const price = vehicle.cost || getRandomPrice();

  return (
    <div className={`flex rounded-lg overflow-hidden w-full hover:shadow-lg transition-shadow duration-300 mb-4 ${getRandomCardStyling()}`}>
      {/* Left side - Image */}
      <div className="relative w-1/4 min-w-[180px]">
        <img
          src={getCarImage()}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/car.png";
            e.target.onerror = null;
          }}
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs flex items-center shadow-sm">
          <span className="text-[#FFD700] mr-1">✓</span> Verified ID
        </div>
      </div>

      {/* Right side - Content */}
      <div className="p-4 w-3/4 flex flex-col space-y-2">
        {/* Header with title and price - updated price color to gold */}
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold">{vehicle.name}</h2>
          <div className="text-[#FFD700] font-bold">₦ {price.toLocaleString()}</div>
        </div>

        {/* Details text */}
        <p className="text-gray-600 text-sm">
          {formattedDetails}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-block bg-[#FFF8E1] text-[#B8860B] px-3 py-1 rounded-sm text-xs">
            Local Used
          </span>
          <span className="inline-block bg-gray-100 px-3 py-1 rounded-sm text-xs">
            Automatic
          </span>
          <span className="inline-block bg-gray-100 px-3 py-1 rounded-sm text-xs">
            {randomKm.toLocaleString()} km
          </span>
        </div>

        {/* Location */}
        <div className="flex justify-between items-center mt-auto pt-2">
          <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-1">📍</span> {vehicle.address || "Lagos, Lekki"}
          </div>
          <div className="text-[#FFD700]">⭐</div> {/* Changed star color to gold */}
        </div>
      </div>
    </div>
  );
}

export default VehiclesCards;
