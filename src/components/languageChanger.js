import { useState } from 'react';

function LanguageChanger({ isTraslatedLanguage, setTraslatedLanguage }) {
    const languages = ['Español', 'English'];

    const handleLanguageChange = () => {
        setTraslatedLanguage(prevState => !prevState);
    };

    return (
        <>
            <div className='language-changer'>
                <p onClick={handleLanguageChange}>
                    &gt;&gt; {isTraslatedLanguage ? languages[1] : languages[0]}
                </p>
            </div>
        </>
    );
}

export default LanguageChanger;
