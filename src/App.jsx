import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import ScrollDiv from './components/ScrollDiv';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation triggers only once
    });
  }, []);


  return (
    <div>
      <Navbar />
      <ScrollDiv />
      <Services />
    </div>
  )
}

export default App
