// import React from 'react'
// import vehiclesData from '../data/vehicles.json'

// function VehiclesCards() {
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
//       {vehiclesData.vehicles.map((vehicle, index) => (
//         <div 
//           key={index} 
//           className='bg-white rounded-lg shadow-md overflow-hidden border'
//         >
//           <div className='relative'>
//             <img 
//               src={vehicle.imageUrl} 
//               alt={vehicle.name} 
//               className='w-full h-48 object-cover'
//             />
//             <div className='absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm'>
//               Local Used
//             </div>
//             <div className='absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm'>
//               Verified ID
//             </div>
//           </div>
          
//           <div className='p-4'>
//             <h2 className='text-lg font-bold mb-2'>
//               {vehicle.name}
//             </h2>
//             <p className='text-gray-600 mb-2 text-sm'>
//               {vehicle.details}
//             </p>
            
//             <div className='flex justify-between items-center mb-2'>
//               <div className='flex space-x-2'>
//                 <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
//                   {vehicle.condition}
//                 </span>
//                 <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
//                   {vehicle.type}
//                 </span>
//               </div>
//             </div>
            
//             <div className='flex justify-between items-center'>
//               <p className='text-green-600 font-bold'>
//                 ₦{parseInt(vehicle.cost).toLocaleString()}
//               </p>
//               <p className='text-gray-500 text-sm'>
//                 {vehicle.address}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default VehiclesCards
import React, { useState } from 'react'
import vehiclesData from '../data/vehicles.json'

function VehiclesCards() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className=''>
      {/* View Toggle Buttons */}
     <div className='flex justify-between'>
      <div>
        <div className='text-2xl font-bold p-4 text-center'>Trending Ads</div>
      </div>
     <div className='flex justify-end p-4 space-x-2'>
        <button 
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </button>
        <button 
          onClick={() => setViewMode('list')}
          className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </button>
      </div>
     </div>

      {/* Vehicles Display */}
      {viewMode === 'grid' ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {vehiclesData.vehicles.map((vehicle, index) => (
            <GridViewCard key={index} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className='space-y-4 p-4'>
          {vehiclesData.vehicles.map((vehicle, index) => (
            <ListViewCard key={index} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  )
}

// Grid View Card Component
function GridViewCard({ vehicle }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden border'>
      <div className='relative'>
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className='w-full h-48 object-cover'
        />
        <div className='absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm'>
          Local Used
        </div>
        <div className='absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm'>
          Verified ID
        </div>
      </div>
      
      <div className='p-4'>
        <h2 className='text-lg font-bold mb-2'>
          {vehicle.name}
        </h2>
        <p className='text-gray-600 mb-2 text-sm'>
          {vehicle.details}
        </p>
        
        <div className='flex justify-between items-center mb-2'>
          <div className='flex space-x-2'>
            <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
              {vehicle.condition}
            </span>
            <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
              {vehicle.type}
            </span>
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <p className='text-green-600 font-bold'>f
            ₦{parseInt(vehicle.cost).toLocaleString()}
          </p>
          <p className='text-gray-500 text-sm'>
            {vehicle.address}
          </p>
        </div>
      </div>
    </div>
  )
}

// List View Card Component
function ListViewCard({ vehicle }) {
  return (
    <div className='flex bg-white rounded-lg shadow-md overflow-hidden border w-full'>
    <div className='relative w-1/3'>
      <img 
        src={vehicle.imageUrl} 
        alt={vehicle.name} 
        className='w-full h-48 object-cover'
      />
      <div className='absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm'>
        Local Used
      </div>
      <div className='absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm'>
        Verified ID
      </div>
    </div>
  
    <div className='p-4 w-2/3 flex flex-col justify-between'>
      <div>
        <h2 className='text-lg font-bold mb-2'>
          {vehicle.name}
        </h2>
        <p className='text-gray-600 mb-2 text-sm'>
          {vehicle.details}
        </p>
  
        <div className='flex space-x-2 mb-2'>
          <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
            {vehicle.condition}
          </span>
          <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
            {vehicle.type}
          </span>
        </div>
      </div>
  
      <div className='flex justify-between items-center'>
        <p className='text-green-600 font-bold'>
          ₦{parseInt(vehicle.cost).toLocaleString()}
        </p>
        <p className='text-gray-500 text-sm'>
          {vehicle.address}
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default VehiclesCards