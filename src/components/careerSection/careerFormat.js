import React, { useState } from 'react';
import CareerCard from '../careerCards';

function CareerFormat() {
    return (
        <>
            <div className="section">
                <div className='career-title'>
                    <div className='circle-title'></div>
                    <hr className='left-hr' />
                    <p>Trayectoria</p>
                    <hr className='right-hr' />
                </div>
                <div className='career-subtitle'>
                    <div className='circle-title'></div>
                    <hr className='left-hr' />
                    <p>Formacion</p>
                    <hr className='right-hr' />
                </div>
                <div className='centered'>
                    <hr className='career-end' />
                </div>
                <hr className='career-divisor' />
            </div>
        </>
    );
}

export default CareerFormat;