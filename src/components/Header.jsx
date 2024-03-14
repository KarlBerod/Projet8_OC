import logoRed from '../images/logo_red.jpg';
import '../styles/Header.css';
import {
    NavLink
  } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div>
            <img src={logoRed} alt="logo en rouge" />
            </div>
            <div>
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/a-propos" className="margin-left">A Propos</NavLink>
                </nav>
            </div>
        </header>
    );
}