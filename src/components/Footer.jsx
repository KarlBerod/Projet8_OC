import '../styles/Footer.css';
import logoWhite from '../images/logo_white.jpg';

export default function Footer(){
    return(
        <footer>
            <img className='logo-footer' src={logoWhite} alt="logo en rouge" />
            <p className='footer-rights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}