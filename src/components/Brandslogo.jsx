import { useEffect, useState } from "react";

function BrandLogos() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const imports = import.meta.glob("../assets/Brand_logos/*.{png,jpg,jpeg,svg}", {
      eager: true,
    });
    const paths = Object.values(imports).map((mod) => mod?.default || mod);
    setLogos(paths);
  }, []);

  const rows = [];
  for (let i = 0; i < logos.length; i += 7) {
    rows.push(logos.slice(i, i + 7));
  }

  return (
    <div className="relative w-full bg-transparent flex flex-col items-center">
      
      <h1
        data-aos="fade-down"
        className="text-2xl md:text-3xl gd-text poppins-extrabold mt-8 mb-2 text-center"
      >
        Connected Experiences
      </h1>

      <div className="relative w-full h-[220px] bg-white/5 rounded-xl overflow-hidden">
        
        <div className="absolute inset-0 flex items-center justify-center z-0 text-center text-[20px] md:text-2xl px-6 font-semibold text-gray-700 dark:text-gray-300 pointer-events-none leading-relaxed">
          INDUSTECH AUTOMATIONS’s flexible platform has integrated
          diverse products from leading manufacturers.
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center items-center gap-8 h-[120px] animate-logoCarouselUp ${
                rowIndex % 2 !== 0 ? "animation-delay-3000" : ""
              }`}
            >
              {row.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="w-[80px] h-[80px] object-contain rounded-md"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandLogos;