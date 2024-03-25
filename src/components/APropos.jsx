import '../styles/APropos.css';
import Banner from './Banner';
import Collapse from './Collapse';
import image2 from '../images/image2.jpg'

export default function APropos(){
    return(
        <div>
            <div className="banner-apropos">
                <Banner text="" image={image2} darkness="0"/>
            </div>
            <div className='collapse-section-apropos'>
                <Collapse title="Fiabilité" content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}/>
                <Collapse title="Respect" content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
                <Collapse title="Service" content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
                <Collapse title="Sécurité" content={<p>La sécurité est al priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}/>
            </div>        
        </div>
    )
}