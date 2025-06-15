import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mainBg from '../assets/mainBGImg.webp';

gsap.registerPlugin(ScrollTrigger);

function ScrollDiv() {
  const typedRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const typeRef = useRef(null);
  const parenRef = useRef(null);

  useEffect(() => {
    // Typed animation
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

    // GSAP animations
    gsap.from(headlineRef.current, {
      scrollTrigger: {
        trigger: headlineRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play reverse play reverse',
       
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play reverse play reverse',
      },
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });

    gsap.from(typeRef.current, {
      scrollTrigger: {
        trigger: typeRef.current,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play reverse play reverse',
      },
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });

    gsap.to(parenRef.current, {
      scrollTrigger: {
        trigger: parenRef.current,
        start: 'bottom 80%',
        end: 'bottom 30%',
        toggleActions: 'play reverse play reverse',
        scrub: true,
      },
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      ref={parenRef}
      className="relative h-[200vh] w-full flex flex-col justify-center items-end p-4"
    >
      {/* Background image layer */}
      <img
        src={mainBg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-screen object-cover z-0"
      />

      {/* Black gradient overlay */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-l from-black via-black/50 to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 mr-16 text-white text-right">
        <h1
          ref={headlineRef}
          className="text-2xl md:text-5xl poppins-extrabold leading-relaxed pb-8"
        >
          When your home thinks with you,<br /> life just flows easier.
        </h1>

        <h2
          ref={subtitleRef}
          className="text-base md:text-lg poppins-bold pb-3"
        >
          “Let{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent group-[.dark-mode]:from-fuchsia-500 group-[.dark-mode]:to-pink-500">
            IndusTech Automations
          </span>{" "}
          turn your everyday moments into extraordinary ones.”
        </h2>

        <h4
          ref={typeRef}
          className="text-white text-lg poppins-bold"
        >
          <span className='text-xl' ref={typedRef}></span>
        </h4>
      </div>
    </div>
  );
}

export default ScrollDiv;
