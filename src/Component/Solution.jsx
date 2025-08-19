import React from 'react'
import think from '../assets/Think.png'
import sol2 from '../assets/Sol2.png'
import Sol3 from '../assets/Sol3.png'

function Solution() {
    return (
        <div className='grid grid-cols-3 gap-4 px-10'>
            {/* <div className='flex flex-col w-[50%]'>
                <h2>Thwe Solution</h2>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellendus minima labore aperiam cum nesciunt itaque corrupti laboriosam et magnam.</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem illum quam amet officia error provident expedita dignissimos, quasi asperiores fugiat ipsa nam sunt quaerat doloremque laboriosam quibusdam? Aspernatur debitis quisquam accusamus laboriosam! Tempore, autem. Aspernatur, recusandae est, eos sapiente dolore quo obcaecati nisi, ut saepe nihil optio nesciunt quam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex reprehenderit error distinctio unde totam soluta vel? Numquam, debitis velit.</p>
            </div> */}
            {/* First Part */}
            <div className="flex flex-col gap-4 px-8 py-8 ">
                <h2 className="text-2xl font-bold mb-8">The Solution</h2>
                <h6 className="text-lg  font-bold ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </h6>
                <p className="text-sm text-gray-600 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem illum quam amet officia error provident expedita dignissimos, quasi asperiores fugiat ipsa nam sunt quaerat doloremque laboriosam quibusdam? Aspernatur debitis quisquam accusamus laboriosam! 
                </p>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex reprehenderit error distinctio unde totam soluta vel? Numquam, debitis velit.
                </p>
            </div>

            {/* Second Part */}
            <div className='flex flex-col bg-gray-700 text-white  mt-5 rounded-lg px-8 py-6'>
                <div className='flex flex-col items-start text-start p-6 rounded-xl w-full max-w-md'>
                    <img className='w-[22%] justify-center' src={sol2} alt="" />
                    <h2 className='text-xl'>Lorem ipsum dolor.</h2>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo.Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>
                <div className='flex flex-col items-start text-start p-6 rounded-xl w-full max-w-md'>
                    <img className='w-[23%] ' src={Sol3} alt="" />
                    <h2 className='text-xl'>Lorem ipsum dolor.</h2>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo.Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>
            </div>
            {/* Third Part */}
            <div>
                <img src={think} alt="" />
            </div>
        </div>
    )
}

export default Solution
