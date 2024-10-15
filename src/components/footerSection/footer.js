import React, { useState } from 'react';
import { ReactComponent as GitHubLogo } from '../../imgs/logos/github-icon.svg';
import { ReactComponent as MailLogo } from '../../imgs/logos/mail-icon.svg';
import { ReactComponent as LinkedinLogo } from '../../imgs/logos/linkedin-icon.svg';

import FooterData from './footerData';

const footerContent = [
    { titleEng: "Thanks you for read" },
    { titleEsp: "Muchas gracias por llegar hasta aqui" },
    { networksEsp: "Redes sociales" },
    { networksEng: "Contact Networks" },
    { mailEsp: "Copiar Mail" },
    { mailCopiadoEsp: "Mail Copiado" },
    { mailEng: "Copy Mail" },
    { mailCopiadoEng: "Mail Copied" }
];

function Footer({ isTraslatedLanguage }) {
    const [hover, setHover] = useState(false);
    const [mail, setMail] = useState(false);

    return (
        <div className='footer-container'>
            <div className='footer-title'>
                <div className='circle-title' ></div>
                <hr className='left-hr' />
                {isTraslatedLanguage ? (
                    <p>
                        {footerContent[0].titleEng}
                    </p>
                ) :
                    <p>
                        {footerContent[1].titleEsp}
                    </p>
                }
                <hr className='right-hr' />
                <div className='circle-title' ></div>
            </div>
            <div className='footer-items'>
                {isTraslatedLanguage ? (
                    <p>
                        {footerContent[3].networksEng}
                    </p>
                ) :
                    <p>
                        {footerContent[2].networksEsp}
                    </p>
                }
                <div className='items-icons'>
                    {FooterData.map((footer, index) => {
                        return (
                            <div className='items-icons'
                                key={index}
                            >
                                {
                                    footer.id === 'github' ? (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={footer.content}
                                        >
                                            <GitHubLogo className='footer-logos' alt='Redirigir a GitHub' />
                                        </a>
                                    ) :
                                        footer.id === 'linkedin' ? (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={footer.content}
                                            >
                                                <LinkedinLogo className='footer-logos' alt='Redirigir a linkedin' />
                                            </a>
                                        ) :
                                            footer.id === 'mail' ? (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='footer-item-mail'
                                                    onMouseEnter={() => setHover(true)}
                                                    onMouseLeave={() => setHover(false)}
                                                    onClick={() => {
                                                        setMail(true);
                                                        navigator.clipboard.writeText(footer.mail);
                                                        setTimeout(() => setMail(false), 2000);
                                                    }
                                                    }
                                                >
                                                    <MailLogo className='footer-logos' alt='Copiar correo' />


                                                    {isTraslatedLanguage ? (
                                                        <>
                                                            <p className={`copy-color-mail ${hover ? 'hover' : ''}`}>
                                                                {footerContent[6].mailEng}
                                                            </p>
                                                            <p className={`copied-color-mail ${mail ? 'active' : ''}`}>
                                                                {footerContent[7].mailCopiadoEng}
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <p className={`copy-color-mail ${hover ? 'hover' : ''}`}>
                                                                {footerContent[4].mailEsp}
                                                            </p>
                                                            <p className={`copied-color-mail ${mail ? 'active' : ''}`}>
                                                                {footerContent[5].mailCopiadoEsp}
                                                            </p>
                                                        </>
                                                    )
                                                    }
                                                </a>
                                            ) : null
                                }
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </div >
    );
}

export default Footer;