import React from 'react';

const vehicleSubcategories = [
  { icon: "🚗", name: "Cars", ads: "117,619" },
  { icon: "🚌", name: "Buses & Microbuses", ads: "6,384" },
  { icon: "🚜", name: "Heavy Equipment", ads: "2,350" },
  { icon: "🏍️", name: "Motorcycles & Scooters", ads: "2,639" },
  { icon: "🚚", name: "Trucks & Trailers", ads: "9,791" },
  { icon: "🛠️", name: "Vehicle Parts & Accessories", ads: "183,240" },
  { icon: "⛵", name: "Watercraft & Boats", ads: "135" },
  { icon: "🔧", name: "Automotive Services", ads: "4,187" }
];

function VehicleSubcategories() {
  return (
    <div className="absolute left-full top-0 w-[300px] bg-white shadow-lg border border-gray-200 z-10">
      {vehicleSubcategories.map((subcategory, index) => (
        <div 
          key={index} 
          className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
        >
          <div className="mr-4 text-2xl">{subcategory.icon}</div>
          <div className="flex-grow">
            <div className="text-sm font-medium">{subcategory.name}</div>
            <div className="text-xs text-gray-500">{subcategory.ads} ads</div>
          </div>
          <div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleSubcategories;