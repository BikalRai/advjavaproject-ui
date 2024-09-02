import SecondaryButton from "../button/SecondaryButton";
import PropType from "prop-types";
import "./card.scss";

const Card = ({
  imgUrl = "/images/heroimg.png",
  header = "Venues",
  desc = "Browse different venues to book a spot for your team",
  btnText = "Book Venue",
}) => {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={imgUrl} alt={`${header} image`} />
      </div>
      <div className='card__details'>
        <p className='card__details--header'>{header}</p>
        <p className='card__details--desc'>{desc}</p>
        <SecondaryButton btnText={btnText} />
      </div>
    </div>
  );
};

Card.propTypes = {
  imgUrl: PropType.string,
  header: PropType.string,
  desc: PropType.string,
  btnText: PropType.string,
};

export default Card;
