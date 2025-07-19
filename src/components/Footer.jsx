import React from 'react'
import assets from '../assets/assets'
const Footer = () => {
  return (
    <div className='pt-20 pb-10 px-6 lg:px-32 bg-gray-100 text-gray-600 text-center'>
        <div>
            <div>
                <img src={assets.logo_dark} alt="" /> </div>
            <p> © 2023 Real Estate. All rights reserved.</p>
            <div> </div>
            <div> </div>
        </div>
    </div>
  )
}

export default Footer