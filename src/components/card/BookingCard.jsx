import { MdDeleteForever } from "react-icons/md";
import PropType from "prop-types";
import "./bookingcard.scss";
import axios from "axios";

const BookingCard = ({
  venueName,
  location,
  date,
  startTime,
  endTime,
  price,
  bookingId,
  onDelete,
}) => {
  const deleteBooking = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/bookings/delete/${id}`
      );

      onDelete(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bookingCard'>
      <div className='bookingCard__details'>
        <div className='bookingCard__details--title'>
          <p>@{venueName}</p>
          <p>{location}</p>
        </div>
        <div className='bookingCard__details--body'>
          <p>Date: {date}</p>
          <p>From: {startTime}</p>
          <p>To: {endTime}</p>
          <p className='price'>rs. {price}</p>
        </div>

        <div className='bookingCard__details--action'>
          <MdDeleteForever
            className='icon'
            title='Cancel Booking'
            onClick={() => deleteBooking(bookingId)}
          />
        </div>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  venueName: PropType.string,
  location: PropType.string,
  date: PropType.string,
  startTime: PropType.string,
  endTime: PropType.string,
  price: PropType.number,
  bookingId: PropType.number,
  onDelete: PropType.func,
};

export default BookingCard;
