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
          <p>{date}</p>
          <p>{startTime}</p>
          <p>{endTime}</p>
          <p>rs. {price}</p>
        </div>

        <MdDeleteForever
          className='bookingCard__details--action'
          title='Cancel Booking'
          onClick={() => deleteBooking(bookingId)}
        />
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
