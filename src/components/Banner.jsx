import '../styles/Banner.css';


export default function Banner({text, image, darkness}){
    return(
        <div className='banner' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${darkness}), rgba(0, 0, 0, ${darkness})), url(${image})` }}>
            <h1>{text}</h1>
        </div>
    )
}
