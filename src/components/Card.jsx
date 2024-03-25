import '../styles/Card.css';
import { Link } from 'react-router-dom';

export default function Card({item}){
    const titre = item.title;
    return(
        <Link to={`/logement/${item.id}`} className='card'style={{ '--background-url': `url(${item.pictures[0]})` }}>
            <h2 className='card-title'>{titre}</h2>
        </Link>
    )
}