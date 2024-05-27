import gitHubLogo from '../imgs/logos/github-icon.svg';
import mailLogo from '../imgs/logos/mail-icon.svg';
import linkedinLogo from '../imgs/logos/linkedin-icon.svg';
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
                    <img src={gitHubLogo} alt='Redirigir a GitHub' />
                    <img src={mailLogo} alt='Copiar correo' />
                    <img src={linkedinLogo} alt='Redirigir a linkedin' />
                </div>
            </div>
        </div >
    );
}

export default Footer;