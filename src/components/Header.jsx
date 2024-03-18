import logoRed from '../images/logo_red.jpg';
import '../styles/Header.css';
import {
    NavLink,
    useLocation
  } from "react-router-dom";

export default function Header(){
    const location = useLocation();

    return(
        <header>
            <div>
            <img src={logoRed} alt="logo en rouge" />
            </div>
            <div>
                <nav>
                    <NavLink to="/" className={location.pathname === "/" ? "accueil-menu" : ""}>Accueil</NavLink>
                    <NavLink to="/a-propos" className={`margin-left ${location.pathname === '/a-propos' ? 'a-propos-menu' : ''}`}>A Propos</NavLink>
                </nav>
            </div>
        </header>
    );
}