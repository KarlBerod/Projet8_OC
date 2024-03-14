import '../styles/PageErreur.css';
import {
    NavLink
  } from "react-router-dom";

export default function PageErreur(){
    return(
        <div className='error-content'>
            <h1 className='red error-code'>404</h1>
            <h2 className='red'>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/" className='link-accueil'>Retourner sur la page d’accueil</NavLink>
        </div>
    )
}