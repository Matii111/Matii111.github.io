import { ReactComponent as GitHubLogo } from '../imgs/logos/github-icon.svg';
import { ReactComponent as MailLogo } from '../imgs/logos/mail-icon.svg';
import { ReactComponent as LinkedinLogo } from '../imgs/logos/linkedin-icon.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-title'>
                <div className='circle-title' ></div>
                <hr className='left-hr' />
                <p>Muchas gracias por llegar hasta aqui</p>
                <hr className='right-hr' />
                <div className='circle-title' ></div>
            </div>
            <div className='footer-items'>
                <p>
                    Redes de contacto
                </p>
                <div className='items-icons'>
                    <GitHubLogo className='footer-logos' alt='Redirigir a GitHub' />
                    <MailLogo className='footer-logos' alt='Copiar correo' />
                    <LinkedinLogo className='footer-logos' alt='Redirigir a linkedin' />
                </div>
            </div>
        </div >
    );
}

export default Footer;