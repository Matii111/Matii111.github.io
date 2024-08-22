import React from 'react';
import { Fade } from 'react-awesome-reveal';

function SummarySection() {
    return (
        <div className='summary-container'>
            <Fade
                direction='down'
                className='fade-effect'
                triggerOnce='true'
                fraction='1'
            >
                <p className='summary-title'>
                    Sobre mi &gt;&gt;
                </p>
                <div className='sumaries-container'>
                    <div className='summary-left'>
                        <p>
                            Conocimiento centrado en desarrollo de aplicaciones, software y plataformas web. Experiencia en proyectos bajo tutoria en academia, ademas de proyectos con clientes reales.
                        </p>
                    </div>

                    <div className='summary-right'>
                        <p>
                            Conocimiento y experiencia intermedia con Stack Mern y Scrum++. Nivel de ingles B1.
                        </p>
                        <p>
                            Como metas personales, profundizar en JS y posteriormente ciberseguridad.
                        </p>
                        <div>
                            <a> Curriculum resumen &gt;&gt;</a>
                        </div>
                    </div>
                </div>
            </Fade >
        </div >
    );
};
export default SummarySection;