import React from 'react'
import assets from '../assets/assets';

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto pt-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
            <h1 className='text 2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our
                    Brand</span></h1>
            <p className='text-grey-600 text-center mb-8'>
                Passionate about Properties,Dedicated to Your Vision.
            </p>
            <div className='flex flex-col md:flex-row items-center  md:item-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-grey-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>18+</p>
                            <p>Mn, sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>To be the leading real estate agency in the region, known for our expertise and integrity.</p>
                    <button className='bg-blue-300 border border-gray-600 text-black-800 px-8 py-2 rounded mr-4'>Learn More
                    </button>
                </div>
            </div>
        </div>

    )
}

export default About