import AccordionUsage from "../accordion/Faq";
import Card from "../card/Card";
import MatchCard from "../card/MatchCard";
import EventCarousel from "../carousel/EventCarousel";
import ContactForm from "../form/ContactForm";
import Hero from "../hero/Hero";
import HeroCarousel from "../heroCarousel/HeroCarousel";
import HomeContact from "../homeContact/HomeContact";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <div className='container'>
        <EventCarousel />
        <AccordionUsage />
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
