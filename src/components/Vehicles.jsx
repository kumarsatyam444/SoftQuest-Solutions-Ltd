import React, { useState } from "react";
import vehiclesData from "../data/vehicles.json";

function Vehicles() {
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCategories, setExpandedCategories] = useState(["Vehicles"]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedFilters, setSelectedFilters] = useState({
    location: "All Nigeria",
    verifiedSellers: "all",
    discount: "all",
    priceOption: ""
  });

  // Toggle category expansion
  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  // Handle price range changes
  const handlePriceChange = (field, value) => {
    setPriceRange({
      ...priceRange,
      [field]: value
    });
  };

  // Handle filter selection
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setPriceRange({ min: "", max: "" });
    setSelectedFilters({
      location: "All Nigeria",
      verifiedSellers: "all",
      discount: "all",
      priceOption: ""
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mx-4 md:mx-[50px]">
          {/* Sidebar with Categories and Filters - Increased width */}
          <div className="w-full md:w-1/4 lg:w-1/4 bg-white shadow-md p-5 mb-4 md:mb-0 md:mr-6">
            {/* Categories Section with more spacing */}
            <div className="mb-8">
              <h2 className="font-semibold text-gray-700 mb-4 text-lg">Categories</h2>
              
              {/* Vehicles Category */}
              <div className="mb-3">
                <div 
                  className="flex justify-between items-center cursor-pointer py-2.5 hover:bg-gray-50 px-2 rounded"
                  onClick={() => toggleCategory("Vehicles")}
                >
                  <span className="font-medium text-gray-800">Vehicles</span>
                  <span className="text-gray-500 text-lg">
                    {expandedCategories.includes("Vehicles") ? "−" : "+"}
                  </span>
                </div>
                
                {/* Subcategories with improved spacing and layout */}
                {expandedCategories.includes("Vehicles") && (
                  <div className="ml-4 mt-2 space-y-3">
                    <div className="flex justify-between text-gray-700 hover:text-blue-600 cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span>Cars</span>
                      <span className="text-gray-500">| 114362</span>
                    </div>
                    <div className="flex justify-between text-gray-700 hover:text-blue-600 cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span>Buses & Microbuses</span>
                      <span className="text-gray-500">| 6261</span>
                    </div>
                    <div className="flex justify-between text-gray-700 hover:text-blue-600 cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span>Heavy Equipment</span>
                      <span className="text-gray-500">| 2261</span>
                    </div>
                    <div className="flex justify-between text-gray-700 hover:text-blue-600 cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span>Motorcycles & Scooters</span>
                      <span className="text-gray-500">| 2602</span>
                    </div>
                    <div className="flex justify-between text-gray-700 hover:text-blue-600 cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span>Trucks & Trailers</span>
                      <span className="text-gray-500">| 9791</span>
                    </div>
                    <div className="flex justify-between text-gray-700 hover:text-blue-600 cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded">
                      <span>Vehicle Parts</span>
                      <span className="text-gray-500">| 183240</span>
                    </div>
                    <div className="text-blue-600 cursor-pointer mt-2 px-2 font-medium">
                      Show all 8
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Location Filter */}
            <div className="mb-8">
              <h2 className="font-semibold text-gray-700 mb-4 text-lg">Location</h2>
              <div className="text-gray-700 mb-2 cursor-pointer p-2 hover:bg-gray-50 rounded border border-gray-200">
                {selectedFilters.location}
              </div>
            </div>
            
            {/* Price Filter */}
            <div className="mb-8">
              <h2 className="font-semibold text-gray-700 mb-4 text-lg">Price, ₦</h2>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  placeholder="min"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  className="w-1/2 p-2 border rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="max"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  className="w-1/2 p-2 border rounded text-sm"
                />
              </div>
              
              {/* Price ranges with radio buttons - improved spacing */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceOption"
                      value="under20k"
                      checked={selectedFilters.priceOption === "under20k"}
                      onChange={() => handleFilterChange('priceOption', 'under20k')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>Under 20 K</span>
                  </label>
                  <span className="text-gray-500">• 19 028 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceOption"
                      value="20to120k"
                      checked={selectedFilters.priceOption === "20to120k"}
                      onChange={() => handleFilterChange('priceOption', '20to120k')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>20 - 120 K</span>
                  </label>
                  <span className="text-gray-500">• 76 113 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceOption"
                      value="120kto11m"
                      checked={selectedFilters.priceOption === "120kto11m"}
                      onChange={() => handleFilterChange('priceOption', '120kto11m')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>120 K - 11 M</span>
                  </label>
                  <span className="text-gray-500">• 126 855 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceOption"
                      value="11to54m"
                      checked={selectedFilters.priceOption === "11to54m"}
                      onChange={() => handleFilterChange('priceOption', '11to54m')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>11 - 54 M</span>
                  </label>
                  <span className="text-gray-500">• 79 284 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceOption"
                      value="above54m"
                      checked={selectedFilters.priceOption === "above54m"}
                      onChange={() => handleFilterChange('priceOption', 'above54m')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>More than 54 M</span>
                  </label>
                  <span className="text-gray-500">• 15 856 ads</span>
                </div>
              </div>
              
              {/* Clear/Save buttons */}
              <div className="flex justify-between mt-4">
                <button 
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700 px-3 py-1.5 hover:bg-gray-100 rounded"
                >
                  Clear
                </button>
                <button className="text-green-600 hover:text-green-700 font-medium px-3 py-1.5 hover:bg-green-50 rounded">
                  Save
                </button>
              </div>
            </div>
            
            {/* Verified sellers filter with radio buttons */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-700 text-lg">Verified sellers</h2>
                <span 
                  className="text-blue-600 cursor-pointer text-sm"
                  onClick={() => handleFilterChange('verifiedSellers', 'all')}
                >
                  Show all
                </span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="verifiedSellers"
                      value="verified"
                      checked={selectedFilters.verifiedSellers === "verified"}
                      onChange={() => handleFilterChange('verifiedSellers', 'verified')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>Verified sellers</span>
                  </label>
                  <span className="text-gray-500">• 186 703 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="verifiedSellers"
                      value="unverified"
                      checked={selectedFilters.verifiedSellers === "unverified"}
                      onChange={() => handleFilterChange('verifiedSellers', 'unverified')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>Unverified sellers</span>
                  </label>
                  <span className="text-gray-500">• 130 435 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="verifiedSellers"
                      value="all"
                      checked={selectedFilters.verifiedSellers === "all"}
                      onChange={() => handleFilterChange('verifiedSellers', 'all')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>All sellers</span>
                  </label>
                  <span className="text-gray-500">• 317 138 ads</span>
                </div>
              </div>
            </div>
            
            {/* Discount filter with radio buttons */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-700 text-lg">Discount</h2>
                <span 
                  className="text-blue-600 cursor-pointer text-sm"
                  onClick={() => handleFilterChange('discount', 'all')}
                >
                  Show all
                </span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="discount"
                      value="with"
                      checked={selectedFilters.discount === "with"}
                      onChange={() => handleFilterChange('discount', 'with')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>With discount</span>
                  </label>
                  <span className="text-gray-500">• 393 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="discount"
                      value="without"
                      checked={selectedFilters.discount === "without"}
                      onChange={() => handleFilterChange('discount', 'without')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>Without discount</span>
                  </label>
                  <span className="text-gray-500">• 316 745 ads</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 p-2 rounded">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="discount"
                      value="all"
                      checked={selectedFilters.discount === "all"}
                      onChange={() => handleFilterChange('discount', 'all')}
                      className="mr-2.5 h-4 w-4"
                    />
                    <span>All items</span>
                  </label>
                  <span className="text-gray-500">• 317 138 ads</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area - adjusted width */}
          <div className="w-full md:w-3/4 lg:w-3/4">
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
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
                  {vehiclesData.vehicles.map((vehicle, index) => (
                    <div key={index} className="break-inside-avoid mb-4">
                      <GridViewCard vehicle={vehicle} />
                    </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

// Grid View Card Component
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
  
  // Generate random styling for cards
  const getRandomStyling = () => {
    const random = Math.random();
    
    // Border styles - orange, green, or none
    let borderStyle = "";
    if (random < 0.15) {
      borderStyle = "border-orange-500 border-2"; // Orange border (15% chance)
    } else if (random < 0.3) {
      borderStyle = "border-green-500 border-2"; // Green border (15% chance)
    } else {
      borderStyle = "border border-gray-200"; // Default border (70% chance)
    }
    
    // Background tint - apply to some cards
    let bgStyle = "";
    if (random < 0.1) {
      bgStyle = "bg-blue-50"; // Light blue (10% chance)
    } else if (random < 0.17) {
      bgStyle = "bg-yellow-50"; // Light yellow (7% chance)
    } else if (random < 0.22) {
      bgStyle = "bg-purple-50"; // Light purple (5% chance)
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

  // Generate random styling for list cards
  const getRandomCardStyling = () => {
    const random = Math.random();
    
    // Border styles - orange, green, or default
    let borderStyle = "border border-gray-200"; // Default
    if (random < 0.15) {
      borderStyle = "border-2 border-orange-500"; // Orange border (15% chance)
    } else if (random < 0.3) {
      borderStyle = "border-2 border-green-500"; // Green border (15% chance)
    }
    
    // Background tint - apply to some cards
    let bgStyle = "bg-white"; // Default
    if (random < 0.1) {
      bgStyle = "bg-blue-50"; // Light blue (10% chance)
    } else if (random < 0.17) {
      bgStyle = "bg-yellow-50"; // Light yellow (7% chance)
    } else if (random < 0.22) {
      bgStyle = "bg-purple-50"; // Light purple (5% chance)
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
          <span className="text-blue-600 mr-1">✓</span> Verified ID
        </div>
      </div>

      {/* Right side - Content */}
      <div className="p-4 w-3/4 flex flex-col space-y-2">
        {/* Header with title and price */}
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold">{vehicle.name}</h2>
          <div className="text-green-500 font-bold">₦ {price.toLocaleString()}</div>
        </div>

        {/* Details text */}
        <p className="text-gray-600 text-sm">
          {formattedDetails}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-block bg-gray-100 px-3 py-1 rounded-sm text-xs">
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
          <div className="text-yellow-500">⭐</div>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
