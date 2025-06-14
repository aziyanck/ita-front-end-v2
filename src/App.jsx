import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import ScrollDiv from './components/ScrollDiv';
import Brands from './components/Brands'
import WhyIta from './components/WhyIta'
import Contact from './components/Contact'



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation triggers only once
    })

  }, []);


  return (
    <div className='snap-y snap-mandatory overflow-x-clip'>
      <Navbar />
      <ScrollDiv />
      <Services />
      <div className='snap-start md:h-screen  flex flex-col justify-center items-center'>
        <Brands />
        <WhyIta />
      </div>
      <Contact />

    </div>
  )
}

export default App
