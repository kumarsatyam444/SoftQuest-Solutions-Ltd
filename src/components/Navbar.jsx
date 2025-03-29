import React, { useState } from 'react'
import LoginModal from './LoginModal' // Assuming you save the modal in LoginModal.js

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 border-b-[.5px]  border-[#00831e] '>
       <div className='fixed w-full'>
       <div className="flex items-center justify-between px-10 bg-[#00b53f] text-white py-1">
          <div className="font-extrabold mr-[30px] text-[30px]">Jiji</div>
          <div className='opacity-55 text-[15px]'>SELL FASTER, BUY SMARTER</div>
          <div className="flex items-center space-x-4">
            <div 
              onClick={() => setIsLoginModalOpen(true)} 
              className="cursor-pointer text-[15px] "
            >
              Sign in
            </div>
            <div>|</div>
            <div 
              onClick={() => setIsLoginModalOpen(true)} 
              className="cursor-pointer  text-[15px]"
            >
              Register
            </div>
            <div className="bg-yellow-500 p-[2px] cursor-pointer  text-[15px]  px-[36px] rounded-md"  onClick={() => setIsLoginModalOpen(true)} 
              >SELL</div>
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