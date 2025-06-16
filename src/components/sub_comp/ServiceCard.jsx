import React from 'react';

function ServiceCard({ img, title, desc }) {
    return (
        <div className=" m-4 flex flex-col justify-start items-center w-[80vw] md:min-h-[70vh]  rounded-[5px] md:w-[90vw] md:flex-row md:min-h-[auto] ">
            <div className="img w-full md:w-[60%] flex justify-center">
                <img
                    src={img}
                    alt={title}
                    className="max-w-full h-auto object-contain rounded"
                />
            </div>

            <div className="text  md:w-[40%] mt-4 mx-4 h-auto w-full break-words">
                <h2 className="poppins-black text-base sm:text-lg text-st md:text-4xl leading-snug break-words whitespace-normal">
                    {title}
                </h2>
                <p className="poppins-regular md:text-md text-sm dark-text-l light-text-l leading-relaxed mt-2 whitespace-normal">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
