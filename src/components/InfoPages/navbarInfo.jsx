import React, { useState } from 'react';

function NavbarInfo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-500 shadow-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Menu toggle button for mobile */}
        <button 
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="text-white text-2xl font-bold">Jiji</div>
        </a>

        {/* Search bar */}
        <div className="relative flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Type your search here"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-2 px-4 rounded-full text-sm focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Tagline */}
        <div className="hidden lg:block text-white font-bold text-sm whitespace-nowrap">
          SELL FASTER, BUY SMARTER
        </div>

        {/* Auth Links */}
        <div className="hidden md:flex items-center text-white text-sm mr-4">
          <a href="/signin" className="hover:opacity-80 transition-opacity">Sign in</a>
          <span className="mx-2">|</span>
          <a href="/registration" className="hover:opacity-80 transition-opacity">Registration</a>
        </div>

        {/* Sell button */}
        <a href="/sell" className="hidden md:block bg-orange-500 text-white font-bold px-6 py-2 rounded hover:bg-orange-600 transition-colors">
          SELL
        </a>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-green-500 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="flex flex-col p-4">
          <a href="/signin" className="text-white py-3 border-b border-green-400">Sign in</a>
          <a href="/registration" className="text-white py-3 border-b border-green-400">Registration</a>
          <a href="/sell" className="bg-orange-500 text-white font-bold py-3 px-4 mt-3 rounded text-center">
            SELL
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarInfo;