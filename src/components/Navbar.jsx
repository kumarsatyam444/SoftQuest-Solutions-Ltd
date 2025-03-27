// import React from 'react'

// function Navbar() {
//   return (
//     <div>
//         <div className="flex justify-around  bg-green-600 text-white py-4 ">
//         <div className="font-extrabold text-4xl">Jiji</div>
//         <div className='opacity-75'>SELL FASTER, BUY SMARTER</div>
//         <div className="flex space-x-4 ">
//           <div>Sign in</div>
//           <div>|</div>
//           <div>Register</div>
//           <div className="bg-yellow-500 p-2 px-7 rounded-md">SELL</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'

function Navbar() {
  return (
    <div className='border-b-[1px] border-black'>
      <div className="flex items-center justify-between px-10 bg-green-600 text-white py-4">
        <div className="font-extrabold text-4xl">Jiji</div>
        <div className='opacity-75'>SELL FASTER, BUY SMARTER</div>
        <div className="flex items-center space-x-4">
          <div>Sign in</div>
          <div>|</div>
          <div>Register</div>
          <div className="bg-yellow-500 p-2 px-7 rounded-md">SELL</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar