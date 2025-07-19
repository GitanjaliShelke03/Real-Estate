import React from 'react'
import assets from '../assets/assets'
const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-gray-600 w-full overflow-hidden' id='Footer'>
            <div className='container max-w-5xl mx-auto flex flex-col md:flex flow gap-4'>
                <div className='w-fullflex md:w-1/3 mb:-8 md:mb-0 gap-4'>
                    <img src={assets.logo_dark} alt="" /> 
                <p className='text-gray-400 mt-1'> © 2025 Real Estate. All rights reserved.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8'>
                    <h3 className='text-white flex flex-col gap-2 text-lg font-bold mb-4'>
                        Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About</a>
                        <a href="#Contact" className='hover:text-white'>Contact us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div> </div>
            </div>
            </div>
    
    )
}

export default Footer