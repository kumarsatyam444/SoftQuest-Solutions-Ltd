// import React from 'react'

// function NabarSupport() {
//   return (
//        <div className='border-spacing-1 bg-green-600 text-white p-4'>
//         <div className='text-center '>What are you looking for?</div>
//        <div className='flex justify-center'>
//        <div className='flex justify-center'>
//           <div className='flex mx-2'>
//           <label for="cars" className='text-gray-600 bg-white'>All Nigeria:</label>
//           <select name="cars" id="cars">
//             <option value="volvo">Volvo</option>
//             <option value="saab">Saab</option>
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option>
//           </select>
//           </div>
//         </div>
//         <div className='text-center'>
//           <input type="text" placeholder="I am looking for..." />
//         </div>
//        </div>
//       </div>
//   )
// }

// export default NabarSupport
import React, { useState } from 'react'

function NavbarSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All Nigeria');

  const nigerianStates = [
    'Abuja (FCT)', 'Lagos State', 'Ogun State', 'Oyo State', 'Rivers State', 
    'Abia State', 'Adamawa State', 'Akwa Ibom State', 'Anambra State', 
    'Bauchi State', 'Bayelsa State', 'Benue State', 'Borno State',
    'Cross River State', 'Delta State', 'Ebonyi State', 'Edo State', 
    'Ekiti State', 'Enugu State', 'Gombe State', 'Imo State', 
    'Jigawa State', 'Kaduna State', 'Kano State', 'Katsina State', 
    'Kebbi State', 'Kogi State', 'Kwara State', 'Nasarawa State', 
    'Niger State', 'Ondo State', 'Osun State', 'Plateau State', 
    'Sokoto State', 'Taraba State', 'Yobe State', 'Zamfara State'
  ];

  const StateModal = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStates = nigerianStates.filter(state => 
      state.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
        <div className='bg-white rounded-lg w-11/12 max-w-2xl max-h-[80vh] flex flex-col'>
          {/* Modal Header */}
          <div className='p-4 border-b flex justify-between items-center'>
            <h2 className='text-xl font-bold'>Select State</h2>
            <button 
              onClick={() => setIsModalOpen(false)}
              className='text-2xl font-bold'
            >
              ×
            </button>
          </div>

          {/* Search Input */}
          <div className='p-4'>
            <input 
              type="text" 
              placeholder="Find state, city or district..." 
              className='w-full p-2 border rounded'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* States Grid */}
          <div className='grid grid-cols-3 gap-2 p-4 overflow-y-auto'>
            {filteredStates.map((state, index) => (
              <button 
                key={index} 
                className='p-2 border rounded hover:bg-green-100'
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
          <div className='p-4 border-t text-center'>
            <p>All Nigeria • 2,354,071 Ads</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='bg-green-600  py-6'>
      <div className='text-center text-xl mb-4 text-white'>What are you looking for?</div>
      <div className='flex justify-center space-x-2'>
        <div 
          onClick={() => setIsModalOpen(true)} 
          className='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex items-center'
        >
          {selectedRegion} ▼
        </div>
        <div className='flex-grow max-w-md'>
          <input 
            type="text" 
            placeholder="I am looking for..." 
            className='w-full px-4 py-2 rounded-md text-black'
          />
        </div>
        <div className='bg-yellow-500 flex items-center px-4 rounded-md cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* Render Modal when isModalOpen is true */}
      {isModalOpen && <StateModal />}
    </div>
  )
}

export default NavbarSupport