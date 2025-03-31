import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';

function Navbar({ showSearchInNav }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All Nigeria");
  const [searchTerm, setSearchTerm] = useState("");
  
  const nigerianStates = [
    "Abuja (FCT)",
    "Lagos State",
    "Ogun State",
    "Oyo State",
    "Rivers State",
    "Abia State",
    "Adamawa State",
    "Akwa Ibom State",
    "Anambra State",
    "Bauchi State",
    "Bayelsa State",
    "Benue State",
    "Borno State",
    "Cross River State",
    "Delta State",
    "Ebonyi State",
    "Edo State",
    "Ekiti State",
    "Enugu State",
    "Gombe State",
    "Imo State",
    "Jigawa State",
    "Kaduna State",
    "Kano State",
    "Katsina State",
    "Kebbi State",
    "Kogi State",
    "Kwara State",
    "Nasarawa State",
    "Niger State",
    "Ondo State",
    "Osun State",
    "Plateau State",
    "Sokoto State",
    "Taraba State",
    "Yobe State",
    "Zamfara State",
  ];

  const StateModal = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStates = nigerianStates.filter((state) =>
      state.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-11/12 max-w-2xl max-h-[80vh] flex flex-col">
          {/* Modal Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">Select State</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Find state, city or district..."
              className="w-full p-2 border rounded text-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-3 gap-2 p-4 overflow-y-auto text-gray-500">
            {filteredStates.map((state, index) => (
              <button
                key={index}
                className="p-2 border rounded hover:bg-green-100 text-gray-500"
                onClick={() => {
                  setSelectedRegion(state);
                  setIsModalOpen(false);
                }}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Total Ads Information */}
          <div className="p-4 border-t text-center">
            <p>All Nigeria • 2,354,071 Ads</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 border-b-[1px] border-black border-opacity-15 shadow-sm'>
        <div className='w-full flex justify-center bg-[#00b53f]'>
          <div className="w-full max-w-6xl flex items-center text-white py-1 px-6">
            {/* Logo */}
            <div className="font-extrabold text-3xl mr-4">Jiji</div>
            
            {/* Search components for Vehicles page - inline with other elements */}
            {showSearchInNav && (
              <div className="flex items-center flex-grow mx-4">
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-gray-500 text-sm px-3 py-1 rounded-md cursor-pointer flex items-center mr-2"
                >
                  {selectedRegion.length > 15 ? selectedRegion.substring(0, 15) + '...' : selectedRegion} ▼
                </div>
                <div className="relative flex-grow max-w-md">
                  <input
                    type="text"
                    placeholder="I am looking for..."
                    className="w-full py-1 px-3 text-sm text-gray-800 rounded-md focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Tagline - only show when not on vehicles page */}
            {!showSearchInNav && (
              <div className='opacity-55 text-[15px] flex-grow text-center'>SELL FASTER, BUY SMARTER</div>
            )}
            
            {/* Auth buttons */}
            <div className="flex items-center space-x-3">
              <div 
                onClick={() => setIsLoginModalOpen(true)} 
                className="cursor-pointer text-[12px] hover:underline"
              >
                Sign in
              </div>
              <div className="text-sm">|</div>
              <div 
                onClick={() => setIsLoginModalOpen(true)} 
                className="cursor-pointer text-[12px] hover:underline"
              >
                Registration
              </div>
              <button 
                className="bg-[#FEA03C] text-[15px] px-[42px] py-[8px] rounded-md font-medium hover:bg-[#e89235]"
                onClick={() => setIsLoginModalOpen(true)}
              >
                SELL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render modals */}
      {isLoginModalOpen && (
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      )}
      
      {isModalOpen && <StateModal />}
      
      {/* Add spacing to prevent content from being hidden under the navbar */}
      <div className="h-15"></div>
    </>
  );
}

export default Navbar;
