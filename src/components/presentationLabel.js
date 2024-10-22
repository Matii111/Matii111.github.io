import { ReactComponent as Code } from '../imgs/logos/code-icon.svg';
import { TextDisplay } from '../utils/textDisplay.js';

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
                            <TextDisplay text={presentationEn[0].presentation} />
                            <TextDisplay text={presentationEn[1].name} />
                        </p>
                        <p className='description'>
                            <TextDisplay text={presentationEn[2].description} />
                        </p>
                    </>
                ) : (
                    // esp version
                    <>
                        <p className='presentation'>
                            <TextDisplay text={presentation[0].presentation} />
                            <TextDisplay text={presentation[1].name} />
                        </p>
                        <p className='description'>
                            <TextDisplay text={presentation[2].description} />
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
