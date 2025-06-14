import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

function ScrollDiv() {
    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "Initializing your smart space…",
                "Connecting your home to the future…",
                "Comfort is just seconds away…",
                "Warming up the lights and your lifestyle…",
                "Your home is syncing with your rhythm…",
                "Activating your intelligent lifestyle...",
                "Less effort. More living…",
                "Live simply. Live smart…"
            ],

            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
            smartBackspace: true,
        });

        return () => typed.destroy();
    }, []);


    const divRef = useRef(null);

    useEffect(() => {
        const div = divRef.current;
        const maxScrollTop = div.scrollHeight - div.clientHeight;
        console.log("Max scroll inside div:", maxScrollTop);
    }, []);

    return (
        <div
            ref={divRef}
            className="h-screen overflow-y-auto hide-scrollbar  p-4 snap-y snap-mandatory"
        >
            <div className="h-[200vh] ">
                <div className='snap-start flex flex-col h-screen justify-center items-center snap-always'>
                    <h1 data-aos="fade-up" className="title text-lg md:text-3xl pb-8 md:pb-2 poppins-extrabold leading-relaxed">
                        When your home thinks with you,<br /> life just flows easier.
                    </h1>

                </div>

                <div className='snap-start flex flex-col h-screen justify-center items-center snap-always'>
                    <h2 className='text-base md:text-lg poppins-bold pb-5 md:pb-2'>“Let <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent  group-[.dark-mode]:bg-gradient-to-r group-[.dark-mode]:from-fuchsia-500 group-[.dark-mode]:to-pink-500 poppins-bold">IndusTech Automations</span>  turn your everyday moments into extraordinary ones.”</h2>
                    <h4 >
                        <span ref={typedRef} className=" text-amber-600 inline text-lg poppins-bold"></span>

                    </h4>
                </div>
                <div className='snap-start flex flex-col h-screen justify-center items-center snap-always'>
                    <h2 className='text-base md:text-lg poppins-bold pb-5 md:pb-2'>“Let <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent  group-[.dark-mode]:bg-gradient-to-r group-[.dark-mode]:from-fuchsia-500 group-[.dark-mode]:to-pink-500 poppins-bold">IndusTech Automations</span>  turn your everyday moments into extraordinary ones.”</h2>
                
                </div>
            </div>
        </div>
    );
}

export default ScrollDiv;
