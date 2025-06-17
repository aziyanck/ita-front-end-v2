import React from 'react';
import './Carousel.css';

import img1 from '../assets/carousel/cctv.png';
import img2 from '../assets/carousel/cctv.png';
import img3 from '../assets/carousel/cctv.png';
import img4 from '../assets/carousel/cctv.png';
import img5 from '../assets/carousel/cctv.png';
import img6 from '../assets/carousel/cctv.png';

const items = [
    {
        img: img1,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img5,
    },
    {

        img: img6,
    },
    {

        img: img6,
    },
];

const Carousel = () => {
    return (
        <div className="carousel" data-mask>
            {items.map((item, index) => (
                <article key={index} style={{ '--i': index }}>
                    <img src={item.img} alt={item.title} />
                </article>
            ))}
        </div>
    );
};

export default Carousel;
