import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import ProjectCardsData from './projectCardsData';
import Next from '../../imgs/logos/next-slider-icon.svg';
import Prev from '../../imgs/logos/prev-slider-icon.svg';
function ProjectCard() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleStartChange = (from, to) => {
        console.log(`Starting transition from slide ${from} to slide ${to}`);
        setCurrentSlide(to);
    };

    const slideSettings = {
        autoplay: false,
        slidesToShow: 3,
        canSwipe: false,
        defaultIndex: 0,
        transitionDuration: 500,
        prevArrow: (
            <button className='slideButtonPrev'>
                <img src={Prev} alt="Prev" />
            </button>
        ),
        nextArrow: (
            <button className='slideButtonNext'>
                <img src={Next} alt="Next" />
            </button>
        ),
        onStartChange: handleStartChange
    };

    return (
        <div>
            <div className='featured-title'>
                <div className='circle-title' ></div>
                <hr className='left-hr' />
                <p>
                    Proyectos destacados
                </p>
                <hr className='right-hr' />
            </div>
            <div className="slide-container">
                <Slide {...slideSettings}>
                    {ProjectCardsData.map((project, index) => {
                        const nextSlide = (currentSlide + 1) % ProjectCardsData.length;
                        return (
                            <div
                                className=
                                {`project-card ${currentSlide === index ? '' :
                                    nextSlide === index ? 'middle-card' : ''
                                    }`}
                                key={index}
                            >
                                <p className="project-title">{project.titulo}</p>
                                <hr />
                                <div className="project-info">
                                    <div className="project-img-container">
                                        <img src={project.image} alt={project.titulo} />
                                    </div>
                                    <div className="project-description">
                                        <p>{project.content}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slide>
            </div>
        </div>
    );
}

export default ProjectCard;
