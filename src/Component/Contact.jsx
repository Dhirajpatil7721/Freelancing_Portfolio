// import React from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import contact from '../assets/contact1.jpg';

// function Contact() {
//     return (
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Image Section */}
//                 <div className="rounded-xl overflow-hidden shadow-lg">
//                     <img 
//                         src={contact} 
//                         alt="Contact us" 
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                 </div>

//                 {/* Contact Info Section */}
//                 <div className="bg-white p-8 rounded-xl shadow-lg">
//                     <div className="mb-8">
//                         <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
//                         <p className="text-gray-600">
//                             Have questions or want to discuss a project? We'd love to hear from you!
//                         </p>
//                     </div>

//                     <div className="space-y-6">
//                         {/* Phone */}
//                         <div className="flex items-start">
//                             <div className="bg-blue-100 p-3 rounded-full mr-4">
//                                 <FaPhone className="text-blue-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
//                                 <p className="text-gray-600">+1 (123) 456-7890</p>
//                                 <p className="text-gray-600">+1 (987) 654-3210</p>
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div className="flex items-start">
//                             <div className="bg-green-100 p-3 rounded-full mr-4">
//                                 <FaEnvelope className="text-green-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">Email</h3>
//                                 <p className="text-gray-600">info@example.com</p>
//                                 <p className="text-gray-600">support@example.com</p>
//                             </div>
//                         </div>

//                         {/* Location */}
//                         <div className="flex items-start">
//                             <div className="bg-red-100 p-3 rounded-full mr-4">
//                                 <FaMapMarkerAlt className="text-red-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">Location</h3>
//                                 <p className="text-gray-600">123 Business Avenue</p>
//                                 <p className="text-gray-600">San Francisco, CA 94107</p>
//                             </div>
//                         </div>

//                         {/* Hours */}
//                         <div className="flex items-start">
//                             <div className="bg-purple-100 p-3 rounded-full mr-4">
//                                 <FaClock className="text-purple-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
//                                 <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
//                                 <p className="text-gray-600">Saturday: 10am - 2pm</p>
//                             </div>
//                         </div>

//                         {/* Social Media */}
//                         <div className="flex space-x-4 pt-4">
//                             <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
//                                 <FaLinkedin className="text-blue-600 text-xl" />
//                             </a>
//                             <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
//                                 <FaTwitter className="text-blue-400 text-xl" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;

//Final
// import React from 'react';
// import contact from '../assets/contact1.jpg';
// import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

// function Contact() {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl shadow-xl max-w-6xl mx-auto my-10">

//             <div className="rounded-2xl overflow-hidden shadow-lg">
//                 <img src={contact} alt="Contact" className="w-full h-full object-cover" />
//             </div>

//             <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-inner">
//                 <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Get in Touch</h1>
//                 <p className="text-gray-600 mb-6 text-lg">
//                     We'd love to hear from you. Here's how you can reach us!
//                 </p>

//                 <div className="space-y-6 text-gray-800 text-[17px]">
//                     <div className="flex items-center gap-4">
//                         <div className="bg-blue-100 p-3 rounded-full">
//                             <MdEmail className="text-2xl text-blue-600" />
//                         </div>
//                         <span>support@example.com</span>
//                     </div>

//                     <div className="flex items-center gap-4">
//                         <div className="bg-green-100 p-3 rounded-full">
//                             <MdPhone className="text-2xl text-green-600" />
//                         </div>
//                         <span>+91 98765 43210</span>
//                     </div>

//                     <div className="flex items-center gap-4">
//                         <div className="bg-red-100 p-3 rounded-full">
//                             <MdLocationOn className="text-2xl text-red-600" />
//                         </div>
//                         <span>123, Main Street, Pune, India</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;


//Final And Add 9 Dots
import React, { useState } from 'react';
import contact from '../assets/contact1.jpg';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const [showImg, setShowImg] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">

            {/* 9 Dots Button (click only) */}
            <div
                className="absolute top-4 right-4 cursor-pointer w-10 h-10 flex flex-wrap gap-[2px] p-1 z-20"
                onClick={() => setShowImg((prev) => !prev)}
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                ))}
            </div>

            {/* Image shown only after clicking the 9-dots */}
            {showImg && (
                <div
                    className="absolute top-16 right-4 z-10 w-48 h-32 border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => navigate('/')} // Navigate on image click
                >
                    <img
                        src={contact}
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl shadow-xl max-w-6xl mx-auto my-10">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={contact} alt="Contact" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-inner">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Get in Touch</h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        We'd love to hear from you. Here's how you can reach us!
                    </p>

                    <div className="space-y-6 text-gray-800 text-[17px]">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <MdEmail className="text-2xl text-blue-600" />
                            </div>
                            <span>support@example.com</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                <MdPhone className="text-2xl text-green-600" />
                            </div>
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <MdLocationOn className="text-2xl text-red-600" />
                            </div>
                            <span>123, Main Street, Pune, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
