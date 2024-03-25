import '../styles/CardContainer.css';
import Card from "./Card"
import data from '../data.json';

export default function CardContainer(){
    return(
        <div className='card-container'>
            {data.map((item, index) => (
                <Card key={index} item={item}/>
            ))}
        </div>
    )
}