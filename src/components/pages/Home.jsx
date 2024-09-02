import Card from "../card/Card";
import MatchCard from "../card/MatchCard";
import Hero from "../hero/Hero";
import HeroCarousel from "../heroCarousel/HeroCarousel";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <div className='container'></div>
    </div>
  );
};

export default Home;
