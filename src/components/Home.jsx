import React from 'react'
import VehiclesCards from './VehiclesCards'

function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'> 
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold p-4'>Vehicles for Sale</h1>
        <VehiclesCards/>
      </div>
    </div>
  )
}

export default Home