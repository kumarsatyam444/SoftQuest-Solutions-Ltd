import React, { useState } from 'react';
import VehicleSubcategories from './VehicleSubcategories';

const categoriesData = [
  { 
    icon: "🚗", 
    name: "Vehicles", 
    ads: "322,158",
    hasSubcategories: true
  },
  
  // Add other categories as needed
];

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="bg-white shadow-md">
      {categoriesData.map((category, index) => (
        <div 
          key={index}
          className="relative"
          onMouseEnter={() => setActiveCategory(category.name)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
            <div className="mr-4 text-2xl">{category.icon}</div>
            <div className="flex-grow">
              <div className="text-sm font-medium">{category.name}</div>
              <div className="text-xs text-gray-500">{category.ads} ads</div>
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
          
          {category.name === "Vehicles" && activeCategory === "Vehicles" && (
            <VehicleSubcategories />
          )}
        </div>
      ))}
    </div>
  );
}

export default Categories;