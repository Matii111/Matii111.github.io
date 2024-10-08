import { ReactComponent as Code } from '../imgs/logos/code-icon.svg';

function PresentationLabel({ isTraslatedLanguage }) {
    return (
        <div className='presentation-container'>
            <div className='presentation-label'>
                {isTraslatedLanguage ? (
                    //eng version
                    <>
                        <p className='presentation'>Hi, I'm &lt;Matias&gt;</p>
                        <p className='description'>Junior Developer</p>
                    </>
                ) :
                    //spa version
                    <>
                        <p className='presentation'>Hola, soy &lt;Matias&gt;</p>
                        <p className='description'>Programador Junior</p>
                    </>
                }
            </div>
            <div className='presentation-logo'>
                <Code className='code-logo' />
            </div>
        </div>
    );
};
export default PresentationLabel;