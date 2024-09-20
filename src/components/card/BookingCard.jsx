import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import PropType from "prop-types";
import axios from "axios";
import "./bookingcard.scss";

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
  const navigate = useNavigate();

  const deleteBooking = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.delete(
        `http://localhost:8080/api/bookings/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onDelete(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayNow = () => {
    navigate("/payment-details", {
      state: {
        venueName,
        location,
        date,
        startTime,
        endTime,
        price,
        bookingId,
      },
    });
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
          <button className='btn__primary' onClick={handlePayNow}>
            Pay now
          </button>
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
