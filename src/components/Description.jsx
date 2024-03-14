import '../styles/Description.css';

export default function Description(){
    return(
        <div className='description'>
            <div className='description-left'>
                <h2 className='description-title'>Cozy loft on the Canal Saint-Martin</h2>
                <p>Paris, Île-de-France</p>
                <div className='tags'>
                    <div className='tag'>Cozy</div>
                    <div className="tag">Canal</div>
                    <div className="tag">Paris 10</div>
                </div>
            </div>
            <div className='description-right'>
                <div>
                    <p className='description-name'>Alexandre Dumas</p>
                    <p>circle</p>
                </div>
                <div className="stars">
                    <i className="fa-solid fa-star" ></i>
                    <i className="fa-solid fa-star" ></i>
                    <i className="fa-solid fa-star" ></i>
                    <i className="fa-solid fa-star" ></i>
                    <i className="fa-solid fa-star" ></i>
                </div>
            </div>
        </div>
    )
}