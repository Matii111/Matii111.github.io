import React, { useState } from 'react';
import Code from '../imgs/logos/code-icon.svg';
function PresentationLabel() {
    return (
        <div className='presentation-container'>
            <div className='presentation-label'>
                <p className='presentation'>Hola, soy &lt;Matias&gt;</p>
                <p className='description'>Programador Junior</p>
            </div>
            <div className='presentation-logo'>
                <img src={Code} alt='code' />
            </div>
        </div>
    );
};
export default PresentationLabel;