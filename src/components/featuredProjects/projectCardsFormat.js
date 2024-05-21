import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import ProjectCardsData from './projectCardsData';

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
        prevArrow: <button className='slideButton' />,
        nextArrow: <button className='slideButton' />,
        onStartChange: handleStartChange
    };

    return (
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
    );
}

export default ProjectCard;
