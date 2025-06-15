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

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-amber-400 overflow-hidden p-4">
      <h1 className="text-lg md:text-3xl text-center poppins-extrabold leading-relaxed pb-4">
        When your home thinks with you,<br /> life just flows easier.
      </h1>

      <h2 className="text-base md:text-lg text-center poppins-bold pb-3">
        “Let <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent group-[.dark-mode]:bg-gradient-to-r group-[.dark-mode]:from-fuchsia-500 group-[.dark-mode]:to-pink-500">
          IndusTech Automations
        </span> turn your everyday moments into extraordinary ones.”
      </h2>

      <h4 className="text-amber-600 text-lg poppins-bold">
        <span ref={typedRef}></span>
      </h4>
    </div>
  );
}

export default ScrollDiv;
