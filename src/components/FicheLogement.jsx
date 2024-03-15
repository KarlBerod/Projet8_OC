import '../styles/FicheLogement.css';
import Carousel from './Carousel';
import Collapse from './Collapse';
import Description from './Description';
import data from '../data.json';

export default function FicheLogement(){
    return(
        <div>
            <Carousel/>
            <Description/>
            <div className='collapse-section'>
                <Collapse title="Description" content={data[0].description} className="collapse"/>
                <Collapse title="Équipements" content={data[0].equipments} className="collapse"/>
            </div>
        </div>
    )
}