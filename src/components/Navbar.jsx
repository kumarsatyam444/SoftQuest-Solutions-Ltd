import React, { useState } from 'react'
import LoginModal from './LoginModal' // Assuming you save the modal in LoginModal.js

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 border-b-[1px] border-black  border-opacity-15 shadow-sm '>
        <div className='w-full flex justify-center bg-[#00b53f] pr-[100px]'>
          <div className="w-full max-w-6xl flex justify-between items-center text-white py-1 px-6">
            {/* Logo */}
            <div className="font-extrabold text-3xl pl-[120px] ">Jiji</div>
            
            {/* Tagline - centered */}
            <div className='opacity-55 text-[15px] '>SELL FASTER, BUY SMARTER</div>
            
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
                className="bg-[#FEA03C] text-[15px] px-6 py-2 rounded-md font-medium hover:bg-[#e89235]"
                onClick={() => setIsLoginModalOpen(true)}
              >
                SELL
              </button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  )
}

export default Navbar