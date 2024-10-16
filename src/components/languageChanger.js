import React, { useState } from 'react';

function LanguageChanger({ isTraslatedLanguage, setTraslatedLanguage }) {
    const languages = ['Español', 'English'];
    const [isTranslating, setTranslating] = useState(false);

    const handleLanguageChange = () => {

        if (!isTranslating) {
            setTranslating(true);
            setTraslatedLanguage(prevState => !prevState);

            setTimeout(() => {
                setTranslating(false);
            }, 5000);
        }
    };

    return (
        <>
            <div className='language-changer'>
                <p
                    onClick={handleLanguageChange}
                    className={`${isTranslating ? 'language-changer-translating' : ''}`}
                >
                    &gt;&gt; {isTraslatedLanguage ? languages[0] : languages[1]}
                </p>
            </div>
        </>
    );
}

export default LanguageChanger;
