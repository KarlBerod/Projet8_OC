import '../styles/Carousel.css';

export default function Carousel(){
    return(
        <div className='carousel'>
            <div className='arrows'>
                <div className='left-arrow'>
                    <svg width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_277711_96)">
                    <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_277711_96">
                    <rect width="96" height="119.64" fill="white" transform="translate(0 0.303223)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>

                <div className='right-arrow'>
                    <svg width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_277711_100)">
                    <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_277711_100">
                    <rect width="96" height="119.64" fill="white" transform="translate(0 0.825928)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
            </div>
            <p className='pagination'>1/4</p>
        </div>
    )
}