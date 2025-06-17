import smartHomeMain from "../../assets/carousel/smart-home.jpg";
import smartLivingMain from "../../assets/carousel/smart-living.jpg";
import smartOfficeMain from "../../assets/carousel/smart-office.jpg";

import cctv from "../../assets/carousel/cctv.png";
import lock from "../../assets/carousel/lock.png";
import tv from "../../assets/carousel/tv.png";
import fireAl from "../../assets/carousel/fire-alarm.png";
import gate from "../../assets/carousel/gate.png";
import garden from "../../assets/carousel/smart-garden.png";
import kitchen from "../../assets/carousel/kitchen.png";

const featuresData = [
  {
    title: "Smart Home",
    mainImage: smartHomeMain,
    carouselImages: [cctv, lock, tv, garden, gate, fireAl, kitchen],
  },
  {
    title: "Smart Living",
    mainImage: smartLivingMain,
    carouselImages: [fireAl, gate, cctv],
  },
  {
    title: "Smart Office",
    mainImage: smartOfficeMain,
    carouselImages: [lock, tv, fireAl],
  },
];

export default featuresData;
