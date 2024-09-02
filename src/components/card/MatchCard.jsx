import SecondaryButton from "../button/SecondaryButton";
import PropType from "prop-types";
import "./card.scss";

const MatchCard = ({
  imgUrl,
  venue,
  time,
  day = "today",
  btnText = "More Details",
}) => {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={imgUrl} alt={`${venue} image`} />
      </div>
      <div className='card__details'>
        <p className='card__details--header'>{venue}</p>
        <p className='card__details--time'>{time}</p>
        <p className='card__details--day'>{day}</p>
        <SecondaryButton btnText={btnText} />
      </div>
    </div>
  );
};

MatchCard.propTypes = {
  imgUrl: PropType.string,
  venue: PropType.string,
  time: PropType.string,
  day: PropType.string,
  btnText: PropType.string,
};

export default MatchCard;
