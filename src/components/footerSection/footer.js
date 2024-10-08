import React, { useState } from 'react';
import { ReactComponent as GitHubLogo } from '../../imgs/logos/github-icon.svg';
import { ReactComponent as MailLogo } from '../../imgs/logos/mail-icon.svg';
import { ReactComponent as LinkedinLogo } from '../../imgs/logos/linkedin-icon.svg';

import FooterData from './footerData';

function Footer({ isTraslatedLanguage }) {
    const [hover, setHover] = useState(false);
    const [mail, setMail] = useState(false);

    return (
        <div className='footer-container'>
            <div className='footer-title'>
                <div className='circle-title' ></div>
                <hr className='left-hr' />
                {isTraslatedLanguage ? (
                    <p>Thanks you for read</p>
                ) :
                    <p>Muchas gracias por llegar hasta aqui</p>
                }
                <hr className='right-hr' />
                <div className='circle-title' ></div>
            </div>
            <div className='footer-items'>
                {isTraslatedLanguage ? (
                    <p>Contact Networks</p>
                ) :
                    <p>Redes de Contacto</p>
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
                                                    <p className={`copy-color-mail ${hover ? 'hover' : ''}`}>Copiar mail</p>
                                                    <p className={`copied-color-mail ${mail ? 'active' : ''}`}>Mail copiado</p>
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