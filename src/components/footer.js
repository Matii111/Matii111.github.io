import item from '../imgs/120x120.svg';
function Footer() {
    return (
        <div className='footer-container'>
            <h1>Despedida</h1>
            <div className='footer-items'>
                <h3>
                    Redes de contacto
                </h3>
                <div className='items-icons'>
                    <img src={item} />                    
                    <img src={item} />
                    <img src={item} />
                </div>
            </div>
        </div>
    );
}

export default Footer;