import { MdOutlineAccessTime } from "react-icons/md";
import PropType from "prop-types";
import "./timecard.scss";

const TimeCard = ({ startTime, endTime, price }) => {
  return (
    <div className='timecard'>
      <MdOutlineAccessTime className='timecard__icon' />
      <div className='timecard__timing'>
        <p className='timecard__timing--time'>
          {startTime} to {endTime}
        </p>
        <p className='timecard__timing--duration'>60 mins</p>
      </div>
      <hr />
      <p className='timecard__price'>rs. {price}</p>
      <button className='btn__primary'>Book Ground</button>
    </div>
  );
};

TimeCard.propTypes = {
  startTime: PropType.string,
  endTime: PropType.string,
  price: PropType.number,
};

export default TimeCard;
