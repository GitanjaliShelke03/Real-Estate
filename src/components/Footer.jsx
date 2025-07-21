import React from 'react'
import assets from '../assets/assets'
const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-gray-600 w-full overflow-hidden' id='Footer'>
            <div className='container max-w-5xl mx-auto flex flex-col md:flex flow gap-4'>
                <div className='w-fullflex md:w-1/3 mb:-8 md:mb-0 gap-4'>
                    <img src={assets.logo_dark} alt="" />
                    
                </div>
                <div className='w-full md:w-1/3 mb-8'>
                    <h3 className='text-white text-lg font-bold mb-4'>
                        Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About</a>
                        <a href="#Contact" className='hover:text-white'>Contact us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 clpassName='text-white text-lg font-bold mb-4'>Subscribe to Our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news ,articles and resources, sent to your inbox weekly</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder="enter your email" className='p-2 rounded bg-gray-800 border text-color-gray-400 border-gray-700 focus:outline-none focus:ring-2 w-full md:w-auto focus:ring-blue-500' />
                        <button className='bg-blue-500 text-white p-2  px-4 rounded'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-gray-500 border-t border-gray-700 py-4 mt-10 text-center'> © 2025 Real Estate. All rights reserved.
            </div>
        </div>

    )
}

export default Footer