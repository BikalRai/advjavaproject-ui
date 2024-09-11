import { FaRegHeart } from "react-icons/fa";
import "./venucard.scss";
const VenueCard = () => {
  return (
    <div className='venueCard'>
      <div className='venueCard__img'></div>
      <div className='venueCard__content'>
        <h3 className='venueCard__content--title'>One Tree Hill Futsal</h3>
        <p className='venueCard__content--bodytext'>
          Location: Bhainsepati, Sainbu-25, Lalitpur
        </p>
        <p className='venueCard__content--bodytext'>rating: ⭐⭐⭐</p>
        <p className='venueCard__content--bodytext'>Price: rs. 1200</p>
        <div className='venueCard__content--actions'>
          <button className='btn__primary'>Click to view times</button>
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
