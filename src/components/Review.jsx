
import TestimonialCard from '../components/sub_comp/TestimonialCard';
import testimonialData from '../components/sub_comp/testimonial_data';

function Review() {


    return (
        <div className="review h-auto md:h-screen w-screen z-[100] flex flex-col justify-center items-center gap-10">

            <div data-aos="fade-up" className="connect w-screen bg-blue-100 group-[.dark-mode]:bg-[#313131] h-[auto] flex flex-col justify-center items-center gap-8">
                <h1 className="text-3xl poppins-extrabold text-st p-4">Connect Us With</h1>
                <div className=" text-st w-screen md:h-[auto] pb-10 flex justify-center items-center gap-15 text-3xl ">
                    <a href="" className='hover:text-blue-400 hover-s-up'><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="" className='hover:text-pink-600 hover-s-up'><i className="fa-brands fa-instagram"></i></a>
                    <a href="" className='hover:text-blue-600 hover-s-up'><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="" className='hover:text-green-500 hover-s-up'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="" className='hover:text-red-600 hover-s-up'><i class="fa-solid fa-envelope"></i></a>
                    <a href="tel:9447673262" className='hover:text-blue-500 hover-s-up'><i class="fa-solid fa-phone-volume"></i></a>
                </div>
            </div>

            <div className="review-div w-screen h-auto flex flex-col justify-around  md:flex-row items-center gap-8 ">
                <div className="left ">
                    <h1 data-aos="slide-right" className="text-3xl pl-8 ml-4 md:text-5xl poppins-extrabold text-st p-4">Our Customer Review Says it All</h1>

                </div>
                <div className="right w-auto h-full">
                    <div data-aos="slide-up" className="p-6 md:p-10 flex flex-wrap gap-6 justify-center">
                        {testimonialData.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                text={testimonial.text}
                                name={testimonial.name}
                                role={testimonial.role}
                                rating={testimonial.rating}
                                image={testimonial.image}
                            />
                        ))}
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Review;