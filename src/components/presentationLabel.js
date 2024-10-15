import { ReactComponent as Code } from '../imgs/logos/code-icon.svg';
import { DelayedText } from '../utils/traslator.js';

const presentationEn = [
    { presentation: "Hi,I'm" },
    { name: "<Matias>" },
    { description: 'Junior Developer' }
];

const presentation = [
    { presentation: "Hola, soy" },
    { name: "<Matias>" },
    { description: 'Programador Junior' }
];

function PresentationLabel({ isTraslatedLanguage }) {
    return (
        <div className='presentation-container'>
            <div className='presentation-label'>
                {isTraslatedLanguage ? (
                    // eng version
                    <>
                        <p className='presentation'>
                            <DelayedText text={presentationEn[0].presentation} />
                            <DelayedText text={presentationEn[1].name} />
                        </p>
                        <p className='description'>
                            <DelayedText text={presentationEn[2].description} />
                        </p>
                    </>
                ) : (
                    // esp version
                    <>
                        <p className='presentation'>
                            <DelayedText text={presentation[0].presentation} />
                            <DelayedText text={presentation[1].name} />
                        </p>
                        <p className='description'>
                            <DelayedText text={presentation[2].description} />
                        </p>
                    </>
                )}
            </div>
            <div className='presentation-logo'>
                <Code className='code-logo' />
            </div>
        </div>
    );
}

export default PresentationLabel;
