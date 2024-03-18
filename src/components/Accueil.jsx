import '../styles/Accueil.css';
import Banner from "./Banner"
import CardContainer from "./CardContainer"
import image1 from '../images/image1.jpg'

export default function Accueil(){
    return(
        <div>
            <div className="banner-accueil">
                <Banner text="Chez vous, partout et ailleurs" image={image1} brightness="0.4"/>
            </div>
            <CardContainer/>
        </div>
    )
}