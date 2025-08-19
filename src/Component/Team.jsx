// import React from 'react';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// import { FiMail } from 'react-icons/fi';
// import pic from '../assets/pic.png';

// function Team() {
//     const Members = [
//         {
//             img: pic,
//             name: "Akanksha Sharma",
//             role: "Frontend Developer",
//             info: "Specializes in React and UI/UX design with 5+ years of experience.",
//             linkedin: "https://www.linkedin.com",
//             git: "https://github.com",
//             email: "akanksha@example.com"
//         },
//         {
//             img: pic,
//             name: "Rahul Verma",
//             role: "Backend Engineer",
//             info: "Expert in Node.js and database architecture with cloud specialization.",
//             linkedin: "https://www.linkedin.com",
//             git: "https://github.com",
//             email: "rahul@example.com"
//         },
//         {
//             img: pic,
//             name: "Priya Patel",
//             role: "Product Manager",
//             info: "Drives product vision with data-driven decision making approach.",
//             linkedin: "https://www.linkedin.com",
//             git: "https://github.com",
//             email: "priya@example.com"
//         },
//         {
//             img: pic,
//             name: "Arjun Singh",
//             role: "DevOps Specialist",
//             info: "Implements CI/CD pipelines and cloud infrastructure solutions.",
//             linkedin: "https://www.linkedin.com",
//             git: "https://github.com",
//             email: "arjun@example.com"
//         }
//     ];

//     return (
//         <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-10">
//                     {/* <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Team</h2> */}
//                     <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team Experts</h1>
//                     <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//                 </div>

//                 {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {Members.map((member, index) => (
//                         <div
//                             key={index}
//                             className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
//                         >
//                             <div className="p-6 flex-grow">
//                                 <div className="flex justify-center relative">
//                                     <img
//                                         className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-md group-hover:border-blue-100 transition-all duration-300"
//                                         src={member.img}
//                                         alt={member.name}
//                                     />
//                                 </div>
//                                 <div className="mt-8 text-center">
//                                     <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
//                                     <p className="text-blue-500 font-medium mt-2">{member.role}</p>
//                                     <p className="text-gray-600 mt-4 text-sm leading-relaxed">{member.info}</p>
//                                 </div>
//                             </div>
//                             <div className="px-6 pb-6">
//                                 <div className="flex justify-center space-x-3">
//                                     <a
//                                         href={member.linkedin}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full text-blue-600 hover:text-blue-800 transition-all duration-300"
//                                         aria-label="LinkedIn"
//                                         data-tooltip="LinkedIn"
//                                     >
//                                         <FaLinkedin className="text-lg" />
//                                     </a>
//                                     <a
//                                         href={member.git}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//                                         aria-label="GitHub"
//                                         data-tooltip="GitHub"
//                                     >
//                                         <FaGithub className="text-lg" />
//                                     </a>
//                                     <a
//                                         href={`mailto:${member.email}`}
//                                         className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//                                         aria-label="Email"
//                                         data-tooltip="Email"
//                                     >
//                                         <FiMail className="text-lg" />
//                                     </a>

//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div> */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {Members.map((member, index) => (
//                         <div
//                             key={index}
//                             className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
//                         >
//                             <div className="p-5 flex-grow">
//                                 <div className="flex justify-center relative">
//                                     <img
//                                         className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-sm group-hover:border-blue-50 transition-all duration-300"
//                                         src={member.img}
//                                         alt={member.name}
//                                     />
//                                 </div>
//                                 <div className="mt-6 text-center">
//                                     <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
//                                     <p className="text-blue-500 text-sm font-medium mt-1">{member.role}</p>
//                                     <p className="text-gray-600 mt-3 text-xs leading-snug line-clamp-3">{member.info}</p>
//                                 </div>
//                             </div>
//                             <div className="px-5 pb-5">
//                                 <div className="flex justify-center space-x-2">
//                                     <a
//                                         href={member.linkedin}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full text-blue-600 hover:text-blue-800 transition-all duration-300"
//                                         aria-label="LinkedIn"
//                                         data-tooltip="LinkedIn"
//                                     >
//                                         <FaLinkedin className="text-base" />
//                                     </a>
//                                     <a
//                                         href={member.git}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//                                         aria-label="GitHub"
//                                         data-tooltip="GitHub"
//                                     >
//                                         <FaGithub className="text-base" />
//                                     </a>
//                                     <a
//                                         href={`mailto:${member.email}`}
//                                         className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
//                                         aria-label="Email"
//                                         data-tooltip="Email"
//                                     >
//                                         <FiMail className="text-base" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Team;

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import pic from '../assets/pic.png';

function Team() {
    const Members = [
        {
            img: pic,
            name: "Akanksha Sharma",
            role: "Frontend Developer",
            info: "Specializes in React and UI/UX design with 5+ years of experience.",
            linkedin: "https://www.linkedin.com",
            git: "https://github.com",
            email: "akanksha@example.com",
            initials: "AKSH" // Added initials for each member
        },
        {
            img: pic,
            name: "Rahul Verma",
            role: "Backend Engineer",
            info: "Expert in Node.js and database architecture with cloud specialization.",
            linkedin: "https://www.linkedin.com",
            git: "https://github.com",
            email: "rahul@example.com",
            initials: "RAHU"
        },
        {
            img: pic,
            name: "Priya Patel",
            role: "Product Manager",
            info: "Drives product vision with data-driven decision making approach.",
            linkedin: "https://www.linkedin.com",
            git: "https://github.com",
            email: "priya@example.com",
            initials: "PRPA"
        },
        {
            img: pic,
            name: "Arjun Singh",
            role: "DevOps Specialist",
            info: "Implements CI/CD pipelines and cloud infrastructure solutions.",
            linkedin: "https://www.linkedin.com",
            git: "https://github.com",
            email: "arjun@example.com",
            initials: "ARSI"
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team Experts</h1>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Members.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                        >
                            <div className="p-5 flex-grow">
                                <div className="flex justify-center relative">
                                    <div className="relative w-32 h-32 overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={member.img}
                                            alt={member.name}
                                        />
                                        {/* Bar effect on the left side with letters */}
                                        {/* <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                                            <span className="text-white font-bold text-xs rotate-90 whitespace-nowrap">
                                                {member.initials}
                                            </span>
                                        </div> */}
                                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-blue-400/50 to-blue-600/50 flex items-center justify-center transition-all duration-300 group-hover:from-blue-400 group-hover:to-blue-600">
                                            <span className="text-white font-bold text-xs rotate-90 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                                {member.initials}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-blue-500 text-sm font-medium mt-1">{member.role}</p>
                                    <p className="text-gray-600 mt-3 text-xs leading-snug line-clamp-3">{member.info}</p>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <div className="flex justify-center space-x-2">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full text-blue-600 hover:text-blue-800 transition-all duration-300"
                                        aria-label="LinkedIn"
                                        data-tooltip="LinkedIn"
                                    >
                                        <FaLinkedin className="text-base" />
                                    </a>
                                    <a
                                        href={member.git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
                                        aria-label="GitHub"
                                        data-tooltip="GitHub"
                                    >
                                        <FaGithub className="text-base" />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
                                        aria-label="Email"
                                        data-tooltip="Email"
                                    >
                                        <FiMail className="text-base" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;