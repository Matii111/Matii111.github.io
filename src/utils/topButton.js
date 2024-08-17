import React from 'react';
import { ReactComponent as UpArrow } from '../imgs/logos/up-icon.svg';

let TopButton;

export function topFunction() {
    document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

class GoTop extends React.Component {
    componentDidMount() {
        TopButton = document.getElementById("topButton");
        window.addEventListener('scroll', this.scrollFunction);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    }
    scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            TopButton.classList.add('show');
        } else {
            TopButton.classList.remove('show');
        }
    }
    render() {
        return (
            <div>
                <button onClick={topFunction} class="go-top-btn" id="topButton" title='Subir a inicio'>
                    <UpArrow className='top-btn' />
                </button>
            </div>
        );
    }
}
export default GoTop;