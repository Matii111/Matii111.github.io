import React, { useState } from 'react';
import CareerCard from './careerCards';
import { Fade } from 'react-awesome-reveal';

function CareerFormat() {
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
                        <p>Trayectoria</p>
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
                        <p>Formacion</p>
                        <hr className='right-hr' />
                    </div>
                </Fade>
                <CareerCard />
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