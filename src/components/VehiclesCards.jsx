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
              viewMode === "grid" ? " text-white" : "bg-gray-200"
            }`}
          >
            <img
              src={
                viewMode === "grid"
                  ? "/icons/menu-active.png"
                  : "/icons/menu.png"
              }
              alt="Grid View"
            />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded w-[40px] ${
              viewMode === "list" ? " text-white" : "bg-gray-200"
            }`}
          >
            <img 
              src={
                viewMode === "grid"
                  ? "/icons/line-menu.png"
                  : "/icons/active-line-menu.png"
              }
              alt="List View"
            />
          </button>
        </div>
      </div>

      {/* Vehicles Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-start">
          {vehiclesData.vehicles.map((vehicle, index) => (
            <GridViewCard key={index} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="space-y-4 p-4 w-full">
          {vehiclesData.vehicles.map((vehicle, index) => (
            <ListViewCard key={index} vehicle={vehicle} />
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

  const formattedDetails = formatDetails(vehicle.details);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative aspect-[4/3]">
        {" "}
        {/* 4:3 aspect ratio */}
        <img
          // src={vehicle.imageUrl}
          src="/car.png"
          alt={vehicle.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "placeholder-image-url";
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

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          <span
            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
              vehicle.condition === "Foreign Used"
                ? "bg-purple-100 text-purple-800"
                : "bg-green-100 text-green-800"
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
    return uniqueParts.join(". ") + (uniqueParts.length > 0 ? "." : "");
  };

  const formattedDetails = formatDetails(vehicle.details);

  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-1/3 min-w-[200px]">
        <img
          src="/car.png"
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-medium">
          Verified ID
        </div>
      </div>

      <div className="p-4 w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-1">{vehicle.name}</h2>
          <p className="text-gray-600 mb-2 text-sm max-h-16 overflow-y-auto">
            {formattedDetails}
          </p>

          <div className="mb-3">
            <span
              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                vehicle.condition === "Foreign Used"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {vehicle.condition}
            </span>
            <span className="ml-2 inline-block bg-gray-100 px-2 py-1 rounded text-xs font-medium">
              {vehicle.type}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{vehicle.address}</p>
        </div>
      </div>
    </div>
  );
}

export default VehiclesCards;