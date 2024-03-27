import '../styles/Description.css';
import data from '../data.json';
import Rating from './Rating';
import Tag from './Tag';

export default function Description({index}){
    const title = data[index].title;
    const location = data[index].location;
    const tags = data[index].tags;
    const host = data[index].host;
    const [firstName, lastName] = data[index].host.name.split(' ');

    return(
        <div className='description'>
            <div className='description-left'>
                <h2 className='description-title'>{title}</h2>
                <p className='location-description'>{location}</p>
                <div className='tags'>
                {tags.map((tag, index) => (
                    <Tag key={index} tagname={tag}/>
                ))}
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
                <Rating index={index}/>
            </div>
        </div>
    )
}