import SecondaryButton from "../button/SecondaryButton";
import PropType from "prop-types";
import "./card.scss";

const Card = ({ img, header, desc, btnText, navigationHandleFunc }) => {
  return (
    <div className='card'>
      <div className='card__img'>
        {/* <img src={`data:image/jpeg;base64, ${img}`} alt={`${header} image`} /> */}
        <img src={img} alt={header} />
      </div>
      <div className='card__details'>
        <p className='card__details--header'>{header}</p>
        <p className='card__details--desc'>{desc}</p>
        <SecondaryButton btnText={btnText} onClickFunc={navigationHandleFunc} />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropType.string,
  header: PropType.string,
  desc: PropType.string,
  btnText: PropType.string,
  navigationHandleFunc: PropType.func,
};

export default Card;
