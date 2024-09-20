import AccordionUsage from "../../accordion/Faq";
import EventCarousel from "../../carousel/EventCarousel";
import Hero from "../../hero/Hero";
import HomeContact from "../../homeContact/HomeContact";
// import HomeMatchComponent from "../../matchComponent/HomeMatchComponent";
import ServiceComponent from "../../servicecompoment/ServiceComponent";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <div className='container'>
        <ServiceComponent />
        {/* <HomeMatchComponent /> */}
        <h2>Events</h2>
        <EventCarousel />
        <AccordionUsage />

        <h2 className='section__headers'>Contact Us</h2>
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
