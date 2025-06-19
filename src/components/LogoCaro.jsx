import { useEffect, useState } from "react";
import './LogoCaro.css';

function LogoCaro() {
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

  const twoRows = rows.slice(0, 2); // just 2 rows

  return (
    <div className="relative w-full  flex flex-col items-center bg-transparent">
      <h1 className="text-2xl md:text-3xl font-extrabold gd-text mt-8 mb-2 text-center">
        Connected Experiences
      </h1>
      <p className="text-center text-base font-medium text-gray-800 dark:text-gray-200 max-w-4xl mb-6 px-4">
        Our flexible platform can integrate diverse products from leading manufacturers.
      </p>

      <div className="logo-box ">
        <div className="logo-slider">
          {twoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="logo-row">
              {row.map((logo, index) => (
                <img
                  key={`${rowIndex}-${index}`}
                  src={logo}
                  alt={`logo-${index}`}
                  className="logo-img"
                />
              ))}
            </div>
          ))}

          {/* Duplicate rows once for loop */}
          {twoRows.map((row, rowIndex) => (
            <div key={`duplicate-${rowIndex}`} className="logo-row">
              {row.map((logo, index) => (
                <img
                  key={`duplicate-${rowIndex}-${index}`}
                  src={logo}
                  alt={`logo-${index}`}
                  className="logo-img"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCaro;