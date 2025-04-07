import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';

function Navbar({ showSearchInNav }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All Nigeria");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Get current location to determine page type
  const location = useLocation();
  const isVehicleDetailPage = location.pathname.includes('/vehicle/');
  
  // Rest of the existing code remains the same
  
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 border-b-[1px] border-black border-opacity-15 shadow-sm'>
        {/* Increased height for the navbar on Vehicles page - changed to black background */}
        <div className={`w-full flex justify-center bg-black ${showSearchInNav ? 'py-2' : 'py-1'}`}>
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
                  stroke="#FFD700" 
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
            
            {/* Logo - changed to gold */}
            <div className="font-semibold text-2xl mr-4 text-[#FFD700]">World Auto Motors</div>
            
            {/* Different content based on page */}
            {showSearchInNav ? (
              /* For Vehicles page */
              <>
                {/* Larger Search Bar with increased width and height */}
                <div className="relative w-[320px]">
                  <input
                    type="text"
                    placeholder={isVehicleDetailPage ? "Search in Engines" : "Search in Vehicles"}
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
                  {/* Save Icon - positioned further right - changed to gold */}
                  <button className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#FFD700]">
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
                
                {/* Tagline - now between search and auth buttons - changed to gold */}
                <div className='opacity-85 text-[15px] mx-auto text-[#FFD700]'>SELL FASTER, BUY SMARTER</div>
              </>
            ) : (
              /* Original content for Home page - changed to gold */
              <div className='opacity-85 text-[15px] flex-grow text-center text-[#FFD700]'>SELL FASTER, BUY SMARTER</div>
            )}
            
            {/* Auth buttons - changed to gold */}
            <div className="flex items-center space-x-3 ml-auto">
              <div 
                onClick={() => setIsLoginModalOpen(true)} 
                className="cursor-pointer text-[12px] hover:underline text-[#FFD700]"
              >
                Sign in
              </div>
              <div className="text-sm text-[#FFD700]">|</div>
              <div 
                onClick={() => setIsLoginModalOpen(true)} 
                className="cursor-pointer text-[12px] hover:underline text-[#FFD700]"
              >
                Registration
              </div>
              <button 
                className="bg-[#FFD700] text-[15px] px-[42px] py-[8px] rounded-md font-medium hover:bg-[#E6C200] text-black"
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
