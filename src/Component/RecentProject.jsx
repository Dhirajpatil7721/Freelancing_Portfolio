// import React from 'react'
// import project from '../assets/projectImg.jpg'

// function RecentProject() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10">
//       <div className=" p-4">
//         <h2 className='text-start font-bold text-3xl mb-8'>Recent Project</h2>
//         <img src={project} alt="" />
//       </div>
//       <div className=" p-4">
//         <h2>Our Collection</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cumque!</p>

//         <div className="px-6 md:px-20 py-10">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">Project Progress Overview</h2>

//           <div className="w-full h-10 rounded-md overflow-hidden flex border border-gray-300">
//             <div
//               className="h-full flex items-center justify-center text-sm text-gray-800"
//               style={{ width: '70%', backgroundColor: '#7bf28bff' }}
//             >
//               70%
//             </div>
//             <div
//               className="h-full flex items-center justify-center text-sm text-white"
//               style={{ width: '20%', backgroundColor: '#4a4a4a' }}
//             >
//               20%
//             </div>
//             <div
//               className="h-full flex items-center justify-center text-sm text-gray-800"
//               style={{ width: '10%', backgroundColor: '#e0e0e0' }}
//             >
//               10%
//             </div>
//           </div>

//           {/* Legend */}
//           <div className="mt-4 flex flex-col md:flex-col gap-4 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#7bf28bff' }}></div>
//               <span className="text-gray-800">70% MEARN</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#4a4a4a' }}></div>
//               <span className="text-gray-800">20% AI</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#e0e0e0' }}></div>
//               <span className="text-gray-800">10% Java</span>
//             </div>
//           </div>
//         </div>


//         <div className='flex flex-row gap-4 px210'>
//           <div className="p-4 bg-white rounded-lg shadow-md text-center max-w-sm">
//             <h1 className="text-3xl font-bold text-green-600 mb-2">75%</h1>
//             <h4 className="text-lg font-semibold mb-1">MERN STACK</h4>
//             <p className="text-gray-600 text-sm">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, explicabo.
//             </p>
//           </div>

//           <div className="p-4 bg-gray-400 rounded-lg shadow-md text-center max-w-sm">
//             <h1 className="text-3xl font-bold text-green-600 mb-2">75%</h1>
//             <h4 className="text-lg font-semibold mb-1">MERN STACK</h4>
//             <p className="text-gray-600 text-sm">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, explicabo.
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>

//   )
// }

// export default RecentProject

import React from 'react'
import project from '../assets/projectImg.jpg'

function RecentProject() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mt-5 font-sans">
      <div className="p-4">
        <h2 className="text-start font-extrabold text-4xl mb-8 text-gray-800 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-16 after:bg-green-500">
          Recent Project
        </h2>
        <img src={project} alt="Project" className="rounded-lg shadow-md" />
      </div>

      {/* second div */}
      <div className="p-5 py-18">
       <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Collection</h2>
        <p className="text-gray-600 mb-4 text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cumque!
        </p>


        {/* Progress Bar Section */}
        <div className="px-4 md:px-6 py-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Project Progress Overview</h2>

          <div className="w-full h-10 overflow-hidden flex border border-gray-300 mb-4">
            <div
              className="h-full flex items-center justify-center text-sm text-gray-800"
              style={{ width: '70%', backgroundColor: '#7bf28bff' }}
            >
              70%
            </div>
            <div
              className="h-full flex items-center justify-center text-sm text-white"
              style={{ width: '20%', backgroundColor: '#4a4a4a' }}
            >
              20%
            </div>
            <div
              className="h-full flex items-center justify-center text-sm text-gray-800"
              style={{ width: '10%', backgroundColor: '#e0e0e0' }}
            >
              10%
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 " style={{ backgroundColor: '#7bf28bff' }}></div>
              <span className="text-gray-800 font-medium">70% MEARN</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 " style={{ backgroundColor: '#4a4a4a' }}></div>
              <span className="text-gray-800 font-medium">20% AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 " style={{ backgroundColor: '#e0e0e0' }}></div>
              <span className="text-gray-800 font-medium">10% Java</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="p-4 bg-white rounded-lg shadow-md text-center max-w-sm w-full">
            <h1 className="text-3xl font-bold text-green-600 mb-2">75%</h1>
            <h4 className="text-lg font-semibold mb-1">MERN STACK</h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>

          <div className="p-4 bg-gray-400 rounded-lg shadow-md text-center max-w-sm w-full">
            <h1 className="text-3xl font-bold text-white mb-2">75%</h1>
            <h4 className="text-lg font-semibold text-white mb-1">MERN STACK</h4>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProject
