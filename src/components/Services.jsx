
import ServiceCard from './sub_comp/ServiceCard';
import serviceData from './sub_comp/sevice_data';



function Services() {
    return (
        <div id="services" className="flex  justify-center items-center w-[100vw] h-[auto] dark-text-s light-text-s">
            <div className="flex flex-col justify-center items-center h-[auto] py-15">
                <h1 data-aos="fade-up" className="text-3xl poppins-extrabold p-4">Services</h1>


                {serviceData.map((item, index) => (
                    <ServiceCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        reverse={index % 2 !== 0} 
                    />
                ))}

            </div>
        </div>
    )
}

export default Services;

