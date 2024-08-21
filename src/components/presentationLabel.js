import React from 'react';
import { ReactComponent as Code } from '../imgs/logos/code-icon.svg';

function PresentationLabel() {
    return (
        <div className='presentation-container'>
            <div className='presentation-label'>
                <p className='presentation'>Hola, soy &lt;Matias&gt;</p>
                <p className='description'>Programador Junior</p>
            </div>
            <div className='presentation-logo'>
                <Code className='code-logo'/>
            </div>
        </div>
    );
};
export default PresentationLabel;