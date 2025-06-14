import React from 'react';

function ServiceCard({ img, title, desc, reverse = false }) {
    return (
        <div className="services w-[100vw] h-auto">
            <div className="img">
                <img src={img} className='min-w-[100vw] my-10 ' alt={title} />

            </div>
        </div>
    );
}

export default ServiceCard;
