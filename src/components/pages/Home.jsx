import Card from "../card/Card";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
