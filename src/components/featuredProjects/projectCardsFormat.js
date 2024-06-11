import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import ProjectCardsData from './projectCardsData';
import Next from '../../imgs/logos/next-slider-icon.svg';
import Prev from '../../imgs/logos/prev-slider-icon.svg';
import Close from '../../imgs/logos/close-icon.svg';

function ProjectFormat() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isProjectOpen, setProjectOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleProjectOpen = (id) => {
        setSelectedId(id);
        setProjectOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const handleProjectClose = () => {
        setProjectOpen(false);
        document.body.style.overflow = 'auto';
    }

    const handleStartChange = (from, to) => {
        setCurrentSlide(to);
    };
    const project = ProjectCardsData.find(project => project.id === selectedId);

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
                
                    <div className={`${isProjectOpen ? 'overlay' : 'overlay-inactive'}`}>
                    {isProjectOpen && (
                        <div className='project-preview-container'>
                            <div className='project-preview'>
                                <div className='project-preview-left'>
                                    <div className='project-preview-title'>
                                        <div className='circle-title' ></div>
                                        <hr className='left-hr' />
                                        <p>
                                            {project.title}
                                        </p>
                                    </div>
                                    <p>
                                        {project.content}
                                    </p>
                                    <p className='project-review-link'>
                                        &gt;&gt;{project.link}
                                    </p>
                                </div>
                                <hr className='right-hr' />
                                <div className='project-preview-right'>
                                    <img src={project.image} />
                                    <img src={project.image2} />
                                </div>
                            </div>
                            <p onClick={handleProjectClose} className='overlay-close-button'>
                                <img src={Close} alt="Close" />
                            </p>
                        </div>
                          )}
                    </div>
              
                <Slide {...slideSettings}>
                    {ProjectCardsData.map((project, index) => {
                        const nextSlide = (currentSlide + 1) % ProjectCardsData.length;
                        return (
                            <div
                                className={`project-card ${currentSlide === index ? '' : nextSlide === index ? 'middle-card' : ''}`}
                                key={index}
                            >
                                <p className="project-title">{project.title}</p>
                                <hr />
                                <div className="project-info">
                                    <div className="project-img-container" onClick={() => handleProjectOpen(project.id)}>
                                        <img src={project.image} alt={project.title} />
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

export default ProjectFormat;
