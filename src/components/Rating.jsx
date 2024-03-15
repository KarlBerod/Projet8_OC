import '../styles/Rating.css';
import data from '../data.json';

export default function Rating(){
    const rating = data[1].rating;
    return(
        <div className="stars">
            <i className= {`fa-solid fa-star ${rating >=1 ? 'red' : 'grey'}`}></i>
            <i className={`fa-solid fa-star ${rating >=2 ? 'red' : 'grey'}`}></i>
            <i className={`fa-solid fa-star ${rating >=3 ? 'red' : 'grey'}`}></i>
            <i className={`fa-solid fa-star ${rating >=4 ? 'red' : 'grey'}`}></i>
            <i className={`fa-solid fa-star ${rating >=5 ? 'red' : 'grey'}`}></i>
        </div>
    )
}