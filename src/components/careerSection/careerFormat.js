import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CareerCard from './careerCards';

function CareerFormat({ isTraslatedLanguage }) {
    return (
        <>
            <div className="section">
                <Fade
                    direction='down'
                    className='fade-effect'
                    triggerOnce='true'
                    fraction='1'
                >
                    <div className='career-title'>
                        <div className='circle-title' />
                        <hr className='left-hr' />
                        {isTraslatedLanguage ? (
                            <p>Career</p>
                        ) :
                            <p>Trayectoria</p>
                        }
                        <hr className='right-hr' />
                    </div>
                </Fade>
                <Fade
                    direction='down'
                    className='fade-effect'
                    triggerOnce='true'
                    fraction='1'
                >
                    <div className='career-subtitle'>
                        <div className='circle-title' />
                        <hr className='left-hr' />
                        {isTraslatedLanguage ? (
                            <p>Formation</p>
                        ) :
                            <p>Formacion</p>
                        }
                        <hr className='right-hr' />
                    </div>
                </Fade>
                <CareerCard
                    isTraslatedLanguage={isTraslatedLanguage}
                />
                <div className='centered'>
                    <Fade
                        direction='down'
                        className='fade-effect'
                        triggerOnce='true'
                        fraction='1'
                    >
                        <hr className='career-end' />
                    </Fade>
                </div>
                <Fade
                    direction='down'
                    className='fade-effect'
                    triggerOnce='true'
                    fraction='1'
                >
                    <hr className='career-divisor' />
                </Fade>
            </div>
        </>
    );
}

export default CareerFormat;