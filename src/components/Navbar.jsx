import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';

function Navbar({ showSearchInNav }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All Nigeria");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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
        {/* Increased height for the navbar on Vehicles page */}
        <div className={`w-full flex justify-center bg-[#00b53f] ${showSearchInNav ? 'py-2' : 'py-1'}`}>
          <div className="w-full max-w-6xl flex items-center text-white px-6">
            {/* Hamburger menu icon - only show on Vehicles page */}
            {showSearchInNav && (
              <button 
                className="mr-3 focus:outline-none" 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="feather feather-align-justify"
                >
                  <line x1="21" y1="10" x2="3" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="3" y2="14"></line>
                  <line x1="21" y1="18" x2="3" y2="18"></line>
                </svg>
              </button>
            )}
            
            {/* Logo */}
            <div className="font-extrabold text-3xl mr-4">Jiji</div>
            
            {/* Different content based on page */}
            {showSearchInNav ? (
              /* For Vehicles page */
              <>
                {/* Larger Search Bar with increased width and height */}
                <div className="relative w-[320px]">
                  <input
                    type="text"
                    placeholder="Search in Vehicles"
                    className="w-full py-2.5 pl-4 pr-16 text-sm text-gray-800 rounded-md focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* Search Icon - positioned further right */}
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                  {/* Save Icon - positioned further right */}
                  <button className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#00b53f]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Tagline - now between search and auth buttons */}
                <div className='opacity-55 text-[15px] mx-auto'>SELL FASTER, BUY SMARTER</div>
              </>
            ) : (
              /* Original content for Home page */
              <div className='opacity-55 text-[15px] flex-grow text-center'>SELL FASTER, BUY SMARTER</div>
            )}
            
            {/* Auth buttons */}
            <div className="flex items-center space-x-3 ml-auto">
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
      
      {/* Add more spacing for Vehicles page to account for taller navbar */}
      {showSearchInNav && <div className="h-20"></div>}
    </>
  );
}

export default Navbar;
