import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import vehiclesData from "../data/vehicles.json";

function VehicleDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [vehicle, setVehicle] = useState(null);

  // Sample images for the carousel
  const images = [
    "/vehilcleImg/merc.png",
    "/vehilcleImg/blackToyota.png"
  ];

  // Load vehicle data based on ID
  useEffect(() => {
    // In a real app, you would fetch the specific vehicle by ID from an API
    // For this example, we'll just grab the first vehicle from our data
    // or find the vehicle with the matching ID if it exists
    const foundVehicle = vehiclesData.vehicles.find(v => v.id === id) || vehiclesData.vehicles[0];
    setVehicle(foundVehicle);
  }, [id]);

  // Function to navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // If vehicle data is still loading
  if (!vehicle) {
    return <div className="min-h-screen pt-20 flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen pt-0">
      <div className="container mx-auto px-4">
      {/* Breadcrumb Navigation - All items in circular style */}
      <div className="mx-4 md:mx-[50px] mb-20 mt-[-15px] custom-font-size">
  <div className="flex flex-wrap items-center gap-2">
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/" className="text-gray-700 hover:text-green-600 text-sm">All ads</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles" className="text-gray-700 hover:text-green-600 text-sm">Vehicles</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles/parts" className="text-gray-700 hover:text-green-600 text-sm">Vehicle Parts & Accessories</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles/parts/engines" className="text-gray-700 hover:text-green-600 text-sm">Engines</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles/parts/engines/mercedes" className="text-gray-700 hover:text-green-600 text-sm">Mercedes-Benz</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <span className="text-gray-500  text-sm">{vehicle.name}</span>
    </div>
  </div>
</div>

        <div className="flex flex-col md:flex-row mx-4 md:mx-[50px] gap-6">
          {/* Left Column - Images and Details */}
          <div className="w-full md:w-2/3">
            {/* Image Carousel */}
            <div className="bg-white shadow-md rounded-lg mb-6">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={images[currentImageIndex]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                 
                  {/* Image Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                 
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                 
                  {/* Image Counter */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1}/{images.length}
                  </div>
                  
                  {/* Promoted Badge */}
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm">
                    Promoted
                  </div>
                </div>
               
                {/* Location and Time Info */}
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600 text-sm">
                      <span className="mr-1">📍</span> {vehicle.address || "Lagos, Surulere"}, 1 hour ago
                    </div>
                    <div className="text-gray-500 text-sm">
                      90 views
                    </div>
                  </div>
                </div>
               
                {/* Title */}
                <div className="p-4 border-b">
                  <h1 className="text-2xl font-bold text-gray-800">{vehicle.name}</h1>
                </div>
               
                {/* Specifications */}
                <div className="p-4 border-b">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Condition:</span>
                      <span className="font-medium">{vehicle.condition || "Used"}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Type:</span>
                      <span className="font-medium">{vehicle.type || "Engine & Drivetrain"}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Store address:</span>
                      <span className="font-medium text-blue-600 cursor-pointer">Show 1 options</span>
                    </div>
                  </div>
                </div>
               
                {/* Description */}
                <div className="p-4 border-b">
                  <p className="text-gray-700">
                    {vehicle.details || "Top grade m/benz engines 112 v6 w163, w203, w211 others..."}
                  </p>
                </div>
              </div>
            </div>
           
            {/* Similar Adverts Section */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Similar adverts</h2>
             
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Similar Item 1 */}
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <img
                      src="/vehilcleImg/blackToyota.png"
                      alt="Nissan Ovan Bus"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white text-xs px-1 py-0.5 rounded">
                      Verified ID
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-green-600 font-bold mb-1">₦ 60,000</div>
                    <h3 className="font-medium text-sm mb-1">Nissan Ovan Bus Front and Back Windscreen Glass Available</h3>
                    <p className="text-xs text-gray-500 mb-2">Brand New • Lagos, Ipaja</p>
                  </div>
                </div>
               
                {/* Similar Item 2 */}
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <img
                      src="/vehilcleImg/redToyota.png"
                      alt="Tail Board Hilux"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white text-xs px-1 py-0.5 rounded">
                      Verified ID
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-green-600 font-bold mb-1">₦ 150,000</div>
                    <h3 className="font-medium text-sm mb-1">Tail Board Hilux 2012 to 2013 Model</h3>
                    <p className="text-xs text-gray-500 mb-2">Used • Lagos, Mushin</p>
                  </div>
                </div>
               
                {/* Similar Item 3 */}
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <img
                      src="/vehilcleImg/whiteLexus.png"
                      alt="Complete Catalyst Highlander"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white text-xs px-1 py-0.5 rounded">
                      Verified ID
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-green-600 font-bold mb-1">₦ 190,000</div>
                    <h3 className="font-medium text-sm mb-1">Complete Catalyst Highlander 2005</h3>
                    <p className="text-xs text-gray-500 mb-2">Used • Lagos, Mushin</p>
                  </div>
                </div>
              </div>
             
              {/* View More Button */}
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View more similar adverts
                </button>
              </div>
            </div>
          </div>
         
          {/* Right Column - Seller Info and Actions */}
          <div className="w-full md:w-1/3">
            {/* Price and Contact Card */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <div className="text-green-600 text-2xl font-bold mb-4">₦ {(vehicle.cost || 1200000).toLocaleString()}</div>
             
              {/* Contact Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="w-full bg-[#00b53f] text-white py-2 rounded-md hover:bg-[#009935] transition-colors"
                >
                  {showContact ? "080-1234-5678" : "Show contact"}
                </button>
               
                <button className="w-full bg-white text-[#00b53f] border border-[#00b53f] py-2 rounded-md hover:bg-green-50 transition-colors">
                  Make an offer
                </button>
               
                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  Request call back
                </button>
               
                <button className="w-full bg-white text-blue-600 border border-blue-600 py-2 rounded-md hover:bg-blue-50 transition-colors">
                  Start chat
                </button>
              </div>
            </div>
           
            {/* Seller Info Card */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">
                  E
                </div>
                <div>
                  <h3 className="font-bold">E. A. G. Limited</h3>
                  <div className="flex items-center text-sm">
                    <span className="text-blue-600 mr-1">✓</span>
                    <span>Verified ID</span>
                  </div>
                </div>
              </div>
             
              <div className="text-sm text-gray-600 mb-3">
                Typically replies within a few hours
              </div>
             
              <div className="text-sm text-gray-600 mb-4">
                9 y 3 m on Jiji
              </div>
             
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-medium">28 Feedback</div>
                <button className="text-blue-600 text-sm hover:underline">view all</button>
              </div>
             
              <div className="space-y-2">
                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm">
                  Mark unavailable
                </button>
               
                <button className="w-full bg-white text-red-600 border border-red-600 py-2 rounded-md hover:bg-red-50 transition-colors text-sm">
                  Report Abuse
                </button>
              </div>
            </div>
           
            {/* Safety Tips Card */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Safety tips</h3>
             
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>Avoid sending any prepayments</li>
                <li>Meet with the seller at a safe public place</li>
                <li>Inspect what you're going to buy to make sure it's what you need</li>
                <li>Check all the docs and only pay if you're satisfied</li>
              </ul>
            </div>
           
            {/* Post Ad Button */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <button className="w-full bg-[#FEA03C] text-white py-3 rounded-md hover:bg-[#e89235] transition-colors font-medium">
                Post Ad Like This
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetail;
