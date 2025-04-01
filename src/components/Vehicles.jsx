import React, { useState } from "react";
import vehiclesData from "../data/vehicles.json";

function Vehicles() {
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCategories, setExpandedCategories] = useState(["Vehicles", "Price", "VerifiedSellers", "Discount"]);
  const [showAllVehicleCategories, setShowAllVehicleCategories] = useState(false);
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

  // Toggle showing all vehicle categories
  const toggleShowAllCategories = () => {
    setShowAllVehicleCategories(!showAllVehicleCategories);
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

  // Vehicle categories data
  const vehicleCategories = [
    { name: "Cars", count: 114163 },
    { name: "Buses & Microbuses", count: 6247 },
    { name: "Heavy Equipment", count: 2317 },
    { name: "Motorcycles & Scooters", count: 2581 },
    { name: "Trucks & Trailers", count: 9661 },
    { name: "Vehicle Parts & Accessories", count: 1830 },
    { name: "Watercraft & Boats", count: 140 },
    { name: "Automotive Services", count: 4157 }
  ];

  // Custom radio button style with white space between button and outer circle
  const customRadioStyle = `
    .custom-radio {
      appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid #ccc;
      border-radius: 50%;
      outline: none;
      position: relative;
      margin-right: 10px;
      cursor: pointer;
    }
   
    .custom-radio:checked {
      border-color: #00b53f;
    }
   
    .custom-radio:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #00b53f;
    }
  `;

  return (
    <div className="min-h-screen pt-2">
      <style>{customRadioStyle}</style>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mx-4 md:mx-[50px]">
          {/* Sidebar with Categories and Filters - Increased width */}
          <div className="w-full md:w-1/4 lg:w-1/4 bg-white p-0 mb-4 md:mb-0 md:mr-6 space-y-4">
            {/* Categories Section */}
            <div className="bg-white shadow-md">
              <h2 className="font-semibold text-white text-lg bg-[#00b53f] p-2 mb-0">Categories</h2>
             
              <div className="p-4 pt-2">
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
                 
                  {/* Subcategories with reduced spacing */}
                  {expandedCategories.includes("Vehicles") && (
  <div className="ml-4 mt-1 space-y-0.5">
    {/* Show only first 4 categories or all based on state */}
    {vehicleCategories
      .slice(0, showAllVehicleCategories ? vehicleCategories.length : 4)
      .map((category, index) => (
        <div 
          key={index}
          className="flex text-gray-700 hover:text-blue-600 cursor-pointer py-0.5 px-2 hover:bg-gray-50 rounded whitespace-nowrap text-s"
        >
          <span>{category.name}</span>
          <span className="text-gray-500 ml-1">| {category.count}</span>
        </div>
      ))
    }
    
    {/* Show all / Show less button */}
    <div 
      className="text-green-600 cursor-pointer mt-0.5 px-2 font-medium text-s"
      onClick={toggleShowAllCategories}
    >
      {showAllVehicleCategories ? "Show less" : "Show all 8"}
    </div>
  </div>
)}


                </div>
              </div>
            </div>
           
            {/* Location Filter - Modified with single card and minimal spacing */}
            <div className="bg-white shadow-md">
              <div className="p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-gray-700 text-lg mb-0.5">Location</h2>
                    <p className="text-gray-600">{selectedFilters.location}</p>
                  </div>
                  <span className="text-gray-400 text-xl">&#62;</span>
                </div>
              </div>
            </div>
           
            {/* Price Filter with expand/collapse */}
            <div className="bg-white shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50"
                onClick={() => toggleCategory("Price")}
              >
                <h2 className="font-semibold text-gray-700 text-lg">Price, ₦</h2>
                <span className="text-gray-500 text-lg">
                  {expandedCategories.includes("Price") ? "−" : "+"}
                </span>
              </div>

              {expandedCategories.includes("Price") && (
                <div className="p-4 pt-0">
                  <div className="flex items-center space-x-2 mb-4 mt-3">
                    <input
                      type="text"
                      placeholder="min"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange('min', e.target.value)}
                      className="w-1/2 p-2 border rounded text-sm"
                    />
                    <span className="text-gray-500 font-medium">-</span>
                    <input
                      type="text"
                      placeholder="max"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange('max', e.target.value)}
                      className="w-1/2 p-2 border rounded text-sm"
                    />
                  </div>
                 
                  {/* Price ranges with custom radio buttons */}
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceOption"
                          value="under20k"
                          checked={selectedFilters.priceOption === "under20k"}
                          onChange={() => {
                            handleFilterChange('priceOption', 'under20k');
                            setPriceRange({ min: "0", max: "20000" });
                          }}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.priceOption === "under20k" ? "text-[#00b53f]" : ""}>Under 20 K</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 19 028 ads</span>
                    </div>
                   
                    <div className="flex items-center text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceOption"
                          value="20to120k"
                          checked={selectedFilters.priceOption === "20to120k"}
                          onChange={() => {
                            handleFilterChange('priceOption', '20to120k');
                            setPriceRange({ min: "20000", max: "120000" });
                          }}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.priceOption === "20to120k" ? "text-[#00b53f]" : ""}>20 - 120 K</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 76 113 ads</span>
                    </div>
                   
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceOption"
                          value="120kto11m"
                          checked={selectedFilters.priceOption === "120kto11m"}
                          onChange={() => {
                            handleFilterChange('priceOption', '120kto11m');
                            setPriceRange({ min: "120000", max: "11000000" });
                          }}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.priceOption === "120kto11m" ? "text-[#00b53f]" : ""}>120 K - 11 M</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 126 855 ads</span>
                    </div>
                   
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceOption"
                          value="11to54m"
                          checked={selectedFilters.priceOption === "11to54m"}
                          onChange={() => {
                            handleFilterChange('priceOption', '11to54m');
                            setPriceRange({ min: "11000000", max: "54000000" });
                          }}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.priceOption === "11to54m" ? "text-[#00b53f]" : ""}>11 - 54 M</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 79 284 ads</span>
                    </div>
                   
                    <div className="flex items-center text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="priceOption"
                          value="above54m"
                          checked={selectedFilters.priceOption === "above54m"}
                          onChange={() => {
                            handleFilterChange('priceOption', 'above54m');
                            setPriceRange({ min: "54000000", max: "" });
                          }}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.priceOption === "above54m" ? "text-[#00b53f]" : ""}>More than 54 M</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 15 856 ads</span>
                    </div>
                  </div>
                 
                  {/* Clear/Save buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => {
                        clearFilters();
                        setPriceRange({ min: "", max: "" });
                      }}
                      className="text-gray-500 hover:text-gray-700 px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      CLEAR
                    </button>
                    <button className="text-green-600 hover:text-green-700 font-medium px-3 py-1 hover:bg-green-50 rounded">
                      SAVE
                    </button>
                  </div>
                </div>
              )}
            </div>
           
            {/* Verified sellers filter with expand/collapse */}
            <div className="bg-white shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50"
                onClick={() => toggleCategory("VerifiedSellers")}
              >
                <h2 className="font-semibold text-gray-700 text-lg">Verified sellers</h2>
                <span className="text-gray-500 text-lg">
                  {expandedCategories.includes("VerifiedSellers") ? "−" : "+"}
                </span>
              </div>
             
              {expandedCategories.includes("VerifiedSellers") && (
                <div className="p-4 pt-0">
                  <div className="space-y-1 text-sm mt-3">
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="verifiedSellers"
                          value="all"
                          checked={selectedFilters.verifiedSellers === "all"}
                          onChange={() => handleFilterChange('verifiedSellers', 'all')}
                          className="custom-radio"
                        />
                                         <span className={selectedFilters.verifiedSellers === "all" ? "text-[#00b53f]" : ""}>Show all</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 317 138 ads</span>
                    </div>
                   
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="verifiedSellers"
                          value="verified"
                          checked={selectedFilters.verifiedSellers === "verified"}
                          onChange={() => handleFilterChange('verifiedSellers', 'verified')}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.verifiedSellers === "verified" ? "text-[#00b53f]" : ""}>Verified sellers</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 186 703 ads</span>
                    </div>
                   
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="verifiedSellers"
                          value="unverified"
                          checked={selectedFilters.verifiedSellers === "unverified"}
                          onChange={() => handleFilterChange('verifiedSellers', 'unverified')}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.verifiedSellers === "unverified" ? "text-[#00b53f]" : ""}>Unverified sellers</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 130 435 ads</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
           
            {/* Discount filter with expand/collapse */}
            <div className="bg-white shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50"
                onClick={() => toggleCategory("Discount")}
              >
                <h2 className="font-semibold text-gray-700 text-lg">Discount</h2>
                <span className="text-gray-500 text-lg">
                  {expandedCategories.includes("Discount") ? "−" : "+"}
                </span>
              </div>
             
              {expandedCategories.includes("Discount") && (
                <div className="p-4 pt-0">
                  <div className="space-y-1 text-sm mt-3">
                    <div className="flex items-center text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="discount"
                          value="all"
                          checked={selectedFilters.discount === "all"}
                          onChange={() => handleFilterChange('discount', 'all')}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.discount === "all" ? "text-[#00b53f]" : ""}>Show all</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 317 138 ads</span>
                    </div>
                   
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="discount"
                          value="with"
                          checked={selectedFilters.discount === "with"}
                          onChange={() => handleFilterChange('discount', 'with')}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.discount === "with" ? "text-[#00b53f]" : ""}>With discount</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 393 ads</span>
                    </div>
                   
                    <div className="flex items-center  text-gray-700 hover:bg-gray-50 p-2 rounded">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="discount"
                          value="without"
                          checked={selectedFilters.discount === "without"}
                          onChange={() => handleFilterChange('discount', 'without')}
                          className="custom-radio"
                        />
                        <span className={selectedFilters.discount === "without" ? "text-[#00b53f]" : ""}>Without discount</span>
                      </label>
                      <span className="text-gray-500 ml-1">• 316 745 ads</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

{/* Main Content Area - adjusted width */}
<div className="w-full md:w-3/4 lg:w-3/4">
  <div className="w-full bg-white shadow-md">
    {/* Header with title and view toggle buttons */}
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold text-gray-600">Vehicles in Nigeria</h1>
      
      {/* Added significant whitespace between title and controls */}
      <div className="h-8"></div>
      
      {/* View toggle and sorting options in the same row */}
      <div className="flex items-center justify-between mt-4">
        {/* View Toggle Buttons */}
        <div className="flex items-center space-x-4">
          {/* Grid View Button */}
          <button
            onClick={() => setViewMode("grid")}
            className="focus:outline-none"
          >
            <img
              src={
                viewMode === "grid"
                  ? "/icons/menu-active.png"  // Green icon for active state
                  : "/icons/menu.png"         // Gray icon for inactive state
              }
              alt="Grid View"
              className="w-5 h-5"
            />
          </button>
          
          {/* List View Button */}
          <button
            onClick={() => setViewMode("list")}
            className="focus:outline-none"
          >
            <img
              src={
                viewMode === "list"
                  ? "/icons/active-line-menu.png"  // Green icon for active state
                  : "/icons/line-menu.png"         // Gray icon for inactive state
              }
              alt="List View"
              className="w-5 h-5"
            />
          </button>
        </div>
        
        {/* Sort by options */}
        <div className="flex items-center text-gray-600 text-sm">
          <span className="mr-2">Sort by:</span>
          
          {/* Up arrow in green - increased size and removed margin */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#00b53f" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-0"
          >
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          
          {/* Down arrow in green - increased size */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#00b53f" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-1"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          
          {/* Recommended option */}
          <span className="mr-2">Recommended</span>
          
          <span className="mx-2 text-gray-400">|</span>
          
          {/* Clock icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#00b53f" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-1"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          
          {/* Any time option */}
          <span className="cursor-pointer hover:text-[#00b53f]">Any time</span>
        </div>
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
  