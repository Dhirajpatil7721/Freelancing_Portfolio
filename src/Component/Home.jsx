// import React from 'react'
// import project from '../assets/Pages/Project.png'

// function Home() {
//     return (
//         <div className='w-[85%] h-[50%] mx-auto flex items-center justify-center mt-8'>
//             <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4 w-full">
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>
//                 <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105"><img className='w-full h-auto rounded' src={project} alt="" /></div>

//             </div>

//         </div>
//     )
// }

// export default Home

import React from 'react';
import { Link } from 'react-router-dom';
import project from '../assets/Pages/Project.png';

function Home() {
    const pages = [
        { page: 'project', path: '/' },
        { page: 'about', path: '/team' },
        { page: 'contact', path: '/contact' },
        { page: 'service', path: '/solution' },
        { page: 'blog', path: '/contact' },
        { page: 'team', path: '/recentproject' },
        { page: 'portfolio', path: '/portfolio' },
        { page: 'faq', path: '/faq' },
        { page: 'support', path: '/support' }
    ];

    return (
        <div>
            <header>
                <h1>Our Portfolio</h1>
                <p>Creative | Technology | Marketing | Automation</p>
            </header>
            <div className='w-[85%] mx-auto mt-8 flex items-center justify-center'>

                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    {pages.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <div className="bg-gray-300 p-2 rounded shadow transform transition-transform duration-300 hover:scale-105">
                                <img
                                    className='w-full h-auto rounded'
                                    src={project}
                                    alt={item.page}
                                />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Home;
