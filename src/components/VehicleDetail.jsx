import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import vehiclesData from "../data/vehicles.json";
import { TbUserCheck, TbUserCircle , TbMessage2Filled, TbMessage, TbMapPin, TbEye} from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

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
      <Link to="/" className="text-gray-700 hover:text-[#FFD700] text-sm">All ads</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles" className="text-gray-700 hover:text-[#FFD700] text-sm">Vehicles</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles/parts" className="text-gray-700 hover:text-[#FFD700] text-sm">Vehicle Parts & Accessories</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles/parts/engines" className="text-gray-700 hover:text-[#FFD700] text-sm">Engines</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Link to="/vehicles/parts/engines/mercedes" className="text-gray-700 hover:text-[#FFD700] text-sm">Mercedes-Benz</Link>
    </div>
    
    <span className="text-gray-400">/</span>
    
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
      <span className="text-gray-500 text-sm">{vehicle.name}</span>
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
                  <div className="absolute bottom-2 right-2 bg-[#000080] bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1}/{images.length}
                  </div>
                  
                  {/* Promoted Badge - changed to gold */}
                  <div className="absolute top-2 left-2 bg-[#FFD700] text-black px-2 py-1 rounded text-sm font-medium">
                    Promoted
                  </div>
                </div>
                {/* Location and Time Info with Views - Updated */}
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600 text-sm">
                    <span className="bg-[#FEA03C] text-white px-2 py-0.5 rounded-sm mr-2">Promoted</span>
      <TbMapPin className="h-4 w-4 mr-1" /> {/* Location icon */}
      {vehicle.address || "Lagos, Isolo"}, 1 hour ago
    </div>
    <div className="flex items-center text-gray-500 text-sm">
      <TbEye className="h-4 w-4 mr-1" /> {/* Eye icon */}
      4686 views
    </div>
                  </div>
                </div>

                {/* Title */}
                {/* Title with Save Icon */}
<div className="p-4 border-b">
  <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gray-800">{vehicle.name || "Toyota Camry 2008 Black"}</h1>
    
    {/* Save icon with count */}
    <div className="flex items-center text-[#FFD700]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
      <span className="font-medium text-gray-500 ">4</span>
    </div>
  </div>
  
  <div className="text-[#FFD700] text-xl font-bold mt-1">₦ 4,500,000</div>
</div>

                {/* Detailed Specifications - New Format */}
                <div className="p-4 border-b">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Condition:</span>
                      <span className="font-medium">Local Used</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Fuel Type:</span>
                      <span className="font-medium">Petrol</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Transmission:</span>
                      <span className="font-medium">Automatic</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Mileage:</span>
                      <span className="font-medium">152,113 km</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Faults:</span>
                      <span className="font-medium">No faults</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Second Condition:</span>
                      <span className="font-medium">Toyota</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Make:</span>
                      <span className="font-medium">Toyota</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Model:</span>
                      <span className="font-medium">Camry</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Year of Manufacture:</span>
                      <span className="font-medium">2008</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Trim:</span>
                      <span className="font-medium">LE 4dr Sedan (2.4L 4cyl 5A)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Body:</span>
                      <span className="font-medium">Sedan</span>
                    </div>
                  </div>
                  
                  {/* Show more section */}
                  <div className="mt-4 flex justify-end">
                    <button className="text-[#FFD700] font-medium flex items-center">
                      Show more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-gray-700 mb-2">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Air Conditioning</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">AM/FM Radio</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">CD Player</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Alloy Wheels</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Airbags</span>
                  </div>
                </div>

   {/* Description */}
<div className="p-4 border-b">
  <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
  <p className="text-gray-700 mb-4">
    Superclean First body 2008 Toyota Camry LE with Supersound Engine and Gear with Factory Fitted AC
  </p>
  
  {/* Show contact button */}
  <div className="flex justify-start mb-2 p-4 border-b">
    <button
      onClick={() => setShowContact(!showContact)}
      className="w-[30%] bg-[#000080] text-[#FFD700] border border-[#FFD700] py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center font-semibold"
    >
      <FaPhoneAlt className="h-3.5 w-3.5 mr-2 text-[#FFD700]" /> {/* Gold phone icon */}
      {showContact ? "080-1234-5678" : "Show contact"}
    </button>
  </div>
  
  {/* Social Media Icons */}
  <div className="flex  justify-start space-x-4 mb-2 p-4 border-b  ">
    {/* Facebook Icon */}
    <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
      </svg>
    </a>
    
    {/* Email Icon */}
    <a href="#" className="text-[#EA4335] hover:opacity-80 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </a>
    
    {/* Twitter/X Icon */}
    <a href="#" className="text-black hover:opacity-80 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
    
    {/* WhatsApp Icon */}
    <a href="#" className="text-[#25D366] hover:opacity-80 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
  {/* Make an offer button */}
  <div className="flex justify-start mb-2 p-4 border-b">
    <button className="w-[30%] bg-[#000080] text-[#FFD700] border border-[#FFD700] py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center font-semibold">
      Make an offer
    </button>
  </div>
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
                    <div className="text-[#FFD700] font-bold mb-1">₦ 60,000</div>
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
                    <div className="text-[#FFD700] font-bold mb-1">₦ 150,000</div>
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
                    <div className="text-[#FFD700] font-bold mb-1">₦ 190,000</div>
                    <h3 className="font-medium text-sm mb-1">Complete Catalyst Highlander 2005</h3>
                    <p className="text-xs text-gray-500 mb-2">Used • Lagos, Mushin</p>
                  </div>
                </div>
              </div>
             
              {/* View More Button */}
              <div className="mt-4 text-center">
                <button className="text-[#FFD700] hover:text-[#E6C200] font-medium">
                  View more similar adverts
                </button>
              </div>
            </div>
          </div>
         {/* Right Column - Seller Info and Actions */}
<div className="w-full md:w-1/3">
  {/* Price and Primary Action Card */}
  <div className="bg-white shadow-lg rounded-lg p-4 mb-6 border border-gray-100">
    <div className="text-[#FFD700] text-2xl font-bold mb-4">₦ 4,500,000</div>
    
    {/* Primary Action Button - changed to black with gold text */}
    <button className="w-full bg-[#000080] text-[#FFD700] border border-[#FFD700] py-2 rounded-md hover:bg-gray-900 transition-colors mb-3 font-semibold">
      Request call back
    </button>
  </div>
  {/* Seller Info Card with Contact Options */}
  <div className="bg-white shadow-lg rounded-lg p-4 mb-6 border border-gray-100">
  <div className="flex items-center mb-4">
    {/* Circular Profile Image */}
    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
      <img 
        src="/profile-placeholder.png" 
        alt="Seller Profile" 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = "https://ui-avatars.com/api/?name=Rafis+Autos&background=f0f0f0&color=666";
          e.target.onerror = null;
        }}
      />
    </div>
    
    <div>
      <h3 className="font-semibold">Rafis autos</h3>
      {/* Verified ID Badge with user-check icon in a circular border */}
      <div className="flex flex-col space-y-1.5">
      <div className="flex items-center">
          <div className="flex items-center bg-[#FFF8E1] text-[#B8860B] rounded-full px-2 py-0.5 text-xs">
            <TbUserCheck className="h-3.5 w-3.5 mr-1" />
            <span className="font-medium">Verified ID</span>
          </div>
        </div>
        
        {/* Message icon with "Typically replies" text */}
        <div className="flex items-center text-xs text-gray-500">
          <TbMessage2Filled className="h-3 w-3 mr-1" />
          <span className="custom-font-size">Typically replies within minutes</span>
        </div>
        
        {/* User icon with "Time on Jiji" text */}
        <div className="flex items-center text-xs text-gray-500">
          <TbUserCircle  className="h-3 w-3 mr-1" />
          <span className="custom-font-size">7 y 1 m on World Auto Motors</span>
        </div>
      </div>
    </div>
  </div>
  
  {/* Contact Buttons - updated colors */}
  <div className="space-y-3 mt-4">
  <button
    onClick={() => setShowContact(!showContact)}
    className="w-full bg-[#000080] text-[#FFD700] border border-[#FFD700] py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center font-semibold"
  >
    <FaPhoneAlt className="h-3.5 w-3.5 mr-2 text-[#FFD700]" /> {/* Gold phone icon */}
    {showContact ? "080-1234-5678" : "Show contact"}
  </button>
  <button className="w-full bg-white text-[#FFD700] border border-[#FFD700] py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
    <TbMessage className="h-4 w-4 mr-2" />
    Start chat
  </button>
</div>
</div>
{/* Feedback Card - UPDATED */}
<div className="bg-white shadow-lg rounded-lg p-4 mb-6 border border-gray-100">
  {/* Single button with all elements inside */}
  <a href="#" className="w-full bg-white text-[#FEA03C] border border-[#FEA03C] py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-between px-4">
    {/* Left side with emoji and feedback count */}
    <div className="flex items-center">
      <span className="text-[#FEA03C] text-lg mr-2">😊</span>
      <span className="font-medium text-[#FEA03C]">26 Feedback</span>
    </div>
    
    {/* Right side with "view all >" */}
    <div className="flex items-center">
      <span className="border-b border-[#FEA03C]">view all</span>
      <span className="ml-1">&gt;</span>
    </div>
  </a>
</div>



{/* Actions Card - UPDATED */}
<div className="bg-white shadow-lg rounded-lg p-4 mb-6 border border-gray-100">
  <div className="flex justify-between text-sm gap-4">
    {/* Mark unavailable button - sky blue */}
    <button className="flex-1 font-semibold py-2 px-4 border border-[#3B82F6] text-[#3B82F6] rounded-full hover:bg-blue-50 transition-colors">
      Mark unavailable
    </button>
    
    {/* Report Abuse button - red */}
    <button className="flex-1 font-semibold py-2 px-4 border border-[#EF4444] text-[#EF4444] rounded-full hover:bg-red-50 transition-colors">
      Report Abuse
    </button>
  </div>
</div>

  
  {/* Safety Tips Card */}
  <div className="bg-white shadow-lg rounded-lg p-4 mb-6 border border-gray-100">
    <h3 className="font-bold text-gray-800 mb-3">Safety tips</h3>
    
    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
      <li>Avoid sending any prepayments</li>
      <li>Meet with the seller at a safe public place</li>
      <li>Inspect what you're going to buy to make sure it's what you need</li>
      <li>Check all the docs and only pay if you're satisfied</li>
    </ul>
  </div>
  
  {/* Post Ad Button - changed to black with gold text */}
  <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-100">
    <button className="w-full bg-[#000080] text-[#FFD700] py-3 border border-[#FFD700] rounded-md hover:bg-gray-900 transition-colors font-medium">
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
