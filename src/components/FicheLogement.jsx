import '../styles/FicheLogement.css';
import Carousel from './Carousel';
import Collapse from './Collapse';
import Description from './Description';
import data from '../data.json';

export default function FicheLogement({index}){
    return(
        <div className='fiche-logement'>
            <Carousel index={index}/>
            <Description index={index}/>
            <div className='collapse-section'>
                <Collapse title="Description" content={<p>{data[index].description}</p>} className="collapse"/>
                <Collapse title="Équipements" content={data[index].equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                ))} className="collapse"/>
            </div>
        </div>
    )
}