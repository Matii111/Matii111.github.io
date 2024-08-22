import { Slide } from 'react-slideshow-image';
function SummarySection() {
    return (
        <div className='summary-container'>
            <div className='summary-title'>
                <p>
                    Sobre mi &gt;&gt;
                </p>
            </div>
            <div className='sumaries-container'>
                <div className='summary-left'>
                    <p>
                        Conocimiento centrado en desarrollo de aplicaciones, software y plataformas web. Experiencia en proyectos bajo tutoria en academia, ademas de proyectos con clientes reales.
                    </p>
                </div>

                <div className='summary-right'>
                    <p>
                        Conocimiento y experiencia intermedia con Stack Mern y Scrum++. Nivel de ingles B1.
                        Como metas personales, profundizar en JS y posteriormente ciberseguridad.
                    </p>
                </div>
            </div>
            <div className='summary-curriculum'> 
                <a> Curriculum resumen &gt;&gt;</a>
            </div>
        </div >
    );
};
export default SummarySection;