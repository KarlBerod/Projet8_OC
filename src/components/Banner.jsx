import '../styles/Banner.css';

export default function Banner({text, image, brightness}){
    return(
        <div className='banner'>
            <img src={image} alt="banner" style={{ filter: `brightness(${brightness})` }} />
            <h1>{text}</h1>
        </div>
    )
}
