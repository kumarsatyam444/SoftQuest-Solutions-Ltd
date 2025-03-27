import React, { useState } from 'react';
import { X } from 'lucide-react'; // For close icon

const LoginModal = ({ isOpen, onClose }) => {
  const [activeLanguage, setActiveLanguage] = useState('English');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-96 relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Language Toggle */}
        <div className="flex border-b">
          <button 
            className={`w-1/2 py-3 ${activeLanguage === 'English' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveLanguage('English')}
          >
            English
          </button>
          <button 
            className={`w-1/2 py-3 ${activeLanguage === 'Hausa' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveLanguage('Hausa')}
          >
            Hausa
          </button>
        </div>

        {/* Sign In Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Sign in</h2>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-4">
            <button className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-100">
              <img 
                src="/api/placeholder/24/24" 
                alt="Google logo" 
                className="mr-2 w-6 h-6"
              />
              Google
            </button>
            <button className="w-full flex items-center justify-center border rounded-md py-2 bg-blue-600 text-white hover:bg-blue-700">
              <img 
                src="/api/placeholder/24/24" 
                alt="Facebook logo" 
                className="mr-2 w-6 h-6"
              />
              Facebook
            </button>
          </div>

          {/* Email/Phone Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mb-4">
            E-mail or phone
          </button>

          {/* Registration Link */}
          <div className="text-center text-sm">
            Don't have an account? 
            <a href="#" className="text-green-500 ml-1 hover:underline">
              Registration
            </a>
          </div>

          {/* Policy Text */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing you agree to the Policy and Rules
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;