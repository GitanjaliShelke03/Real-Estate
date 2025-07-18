import React from 'react'
import assets ,{testimonialsData} from '../assets/assets'
const Testimonials = () => {
    return (
        <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id="Testimonials">
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer  <span className='underline underline-offset-4 decoration-1under font-light'>Testimonials</span></h1>
            <p className='text-center text-grey-500 mb-12 max-w-80mx-auto'>
                Real stories from real clients-Discover the impact of our services through their experiences.
            </p>
            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded-lg px-8 py-12 text-center'>
                        <img className='w-18 h-18 rounded-full mx-auto mb-4'
                            src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-grey-700 font-medium '>{testimonial.name}</h2>
                        <p className='text-grey-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-grey-600'>
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials