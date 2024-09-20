import { useNavigate } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";
import "./hero.scss";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/venues");
  };

  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero__details'>
          <div className='hero__details--headers'>
            <h1>DISCOVER VENUES</h1>
            {/* <h1>TEAMS & VENUES</h1> */}
          </div>
          <h4>Explore different venues at different areas with</h4>
          <h4>a seamless experience</h4>
          <PrimaryButton btnText='GET STARTED' onClickFunc={handleGetStarted} />
        </div>
        <div className='hero__image'>
          {/* <img src='/images/heroimg.png' alt='' /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
