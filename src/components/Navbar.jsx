import React, { useState } from 'react'
import LoginModal from './LoginModal' // Assuming you save the modal in LoginModal.js

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className='border-b-[1px] border-black '>
        <div className="flex items-center justify-between px-10 bg-[#00b53f] text-white py-4">
          <div className="font-extrabold text-2xl">Jiji</div>
          <div className='opacity-55'>SELL FASTER, BUY SMARTER</div>
          <div className="flex items-center space-x-4">
            <div 
              onClick={() => setIsLoginModalOpen(true)} 
              className="cursor-pointer"
            >
              Sign in
            </div>
            <div>|</div>
            <div 
              onClick={() => setIsLoginModalOpen(true)} 
              className="cursor-pointer"
            >
              Register
            </div>
            <div className="bg-yellow-500 p-2 cursor-pointer px-7 rounded-md"  onClick={() => setIsLoginModalOpen(true)} 
              >SELL</div>
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