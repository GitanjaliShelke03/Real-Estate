import React from 'react'
import assets, { projectsData } from '../assets/assets';
import { useEffect } from 'react';

const Projects = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [cardsToShow, setCardsToShow] = React.useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1)
            }
        }
            updateCardsToShow();
            window.addEventListener('resize', updateCardsToShow);
            return () =>
                window.removeEventListener('resize', updateCardsToShow);
        }

    ,[])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
    }
    return (
        <div className='container mx-auto pt-14 md:px-20 lg:px-32 w-full overflow-hidden' id="Projects">
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
            </h1>
            <p className='text-center text-grey-500 mb-8 max-w-80mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

            {/* Slider button */}

            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject}
                    className='p-3 bg-grey-200 rounded mr-2' area-label='Previous Project'>
                    <img src={assets.left_arrow} alt="previous" />
                </button>
                <button onClick={nextProject}
                    className='p-3 bg-grey-200 rounded mr-2' area-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>
            {/* ----project slider container---- */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {projectsData.map((project, index) => (

                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-lg font-semibold text-gray-800'>
                                        {project.title}
                                    </h2>
                                    <p className='text-grey-500 text-sm:'>
                                        {project.price} <span className='px-1'>|</span> {project.location}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Projects