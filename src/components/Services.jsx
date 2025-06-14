import React, { useRef, useState } from 'react';
import ServiceCard from './sub_comp/ServiceCard';
import serviceData from './sub_comp/sevice_data';

function Services() {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        const container = scrollRef.current;
        if (container) {
            const width = container.offsetWidth;
            container.scrollTo({ left: index * width, behavior: 'smooth' });
            setCurrentIndex(index);
        }
    };

    return (
        <div id="services" className="w-full dark-text-s light-text-s  h-[90vh] md:h-screen  overflow-hidden flex flex-col justify-center items-center">
            <h1 data-aos="fade-up" className="text-3xl poppins-extrabold p-4">
                Services
            </h1>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollRef}
                className="w-screen  justity-center h-auto overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap hide-scrollbar"
            >
                {serviceData.map((item, index) => (
                    <div
                        key={index}
                        className="inline-block snap-start snap-always  w-[100vw]  px-4 box-border"
                    >
                        <div className='flex justify-center'>

                        <ServiceCard
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            reverse={index % 2 !== 0}
                        />
                    </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4 ">
                {serviceData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            currentIndex === i ? 'bg-gray-800' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Services;
