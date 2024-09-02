import PrimaryButton from "../button/PrimaryButton";
import "./hero.scss";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero__details'>
          <div className='hero__details--headers'>
            <h1>DISCOVER</h1>
            <h1>TEAMS & VENUES</h1>
          </div>
          <h4>Explore futsal teams and venues with</h4>
          <h4>a seamless experience</h4>
          <PrimaryButton btnText='GET STARTED' />
        </div>
        <div className='hero__image'>
          <img src='/images/heroimg.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
