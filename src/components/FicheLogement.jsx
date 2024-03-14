import '../styles/FicheLogement.css';
import Carousel from './Carousel';
import Collapse from './Collapse';
import Description from './Description';

export default function FicheLogement(){
    return(
        <div>
            <Carousel/>
            <Description/>
            <div className='collapse-section'>
                <Collapse/>
                <Collapse/>
            </div>
        </div>
    )
}