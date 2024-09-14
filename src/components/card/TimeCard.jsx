import { useContext } from "react";
import { AuthContext } from "../../utils/AuthProvider";
import { MdOutlineAccessTime } from "react-icons/md";
import PropType from "prop-types";

import "./timecard.scss";
import axios from "axios";

const TimeCard = ({
  startTime,
  endTime,
  price,
  timeId,
  venueId,
  bookDate,
  onBookingComplete,
}) => {
  const { user } = useContext(AuthContext);

  const createBooking = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.post(
        "http://localhost:8080/api/bookings/create",
        {
          bookingDate: bookDate,
          price: price,
          status: false,
          timeSlotId: timeId,
          userId: user.id,
          venueId: venueId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);
      onBookingComplete(timeId);
    } catch (error) {
      console.log(error.message);
    }
  };

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
      <button className='btn__primary' onClick={createBooking}>
        Book Ground
      </button>
    </div>
  );
};

TimeCard.propTypes = {
  startTime: PropType.string,
  endTime: PropType.string,
  price: PropType.number,
  timeId: PropType.number,
  venueId: PropType.number,
  bookDate: PropType.string,
  onBookingComplete: PropType.func,
};

export default TimeCard;
