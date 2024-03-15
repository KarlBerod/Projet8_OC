import '../styles/Description.css';
import data from '../data.json';
import Rating from './Rating';

export default function Description(){
    const title = data[0].title;
    const location = data[0].location;
    const tags = data[0].tags;
    const host = data[0].host;
    const [firstName, lastName] = data[0].host.name.split(' ');
    const rating = data[1].rating;

    return(
        <div className='description'>
            <div className='description-left'>
                <h2 className='description-title'>{title}</h2>
                <p>{location}</p>
                <div className='tags'>
                    <div className='tag'>{tags[0]}</div>
                    <div className="tag">{tags[1]}</div>
                    <div className="tag">{tags[2]}</div>
                </div>
            </div>
            <div className='description-right'>
                <div className='host'>
                    <div className='name'>
                        <p className='description-name'>{firstName}</p>
                        <p className="description-name">{lastName}</p>
                    </div>
                    <img src={host.picture} alt="host profile" className='profile-pic'></img>
                </div>
                <Rating/>
            </div>
        </div>
    )
}