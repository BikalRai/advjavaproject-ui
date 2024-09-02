import Card from "../card/Card";
import MatchCard from "../card/MatchCard";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <MatchCard />
      </div>
    </div>
  );
};

export default Home;
