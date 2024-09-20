import { useContext, useEffect, useState } from "react";
import BookingCard from "../../card/BookingCard";
import axios from "axios";
import { AuthContext } from "../../../utils/AuthProvider";
import "./mybooking.scss";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { spinnerOverride } from "../../../utils/spinnerCssOverride";

const MyBooking = () => {
  const [userBookings, setUserBookings] = useState([]);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getAllUserBookings = async (userId) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get(
        `http://localhost:8080/api/bookings/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserBookings(res.data);
    } catch (error) {
      if (error.response.status === 403 || error.response.status === 401) {
        navigate("/forbidden");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBooking = (bookingId) => {
    // Filter out the deleted booking from the state
    setUserBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );
  };

  useEffect(() => {
    getAllUserBookings(user.id);
  }, [user.id]);

  return (
    <div className='mybooking'>
      {loading ? (
        <PacmanLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <>
          <div className='mybooking__hero'></div>
          <div className='mybooking__container container'>
            <h1>My Bookings</h1>
            <div className='mybooking__container--bookings'>
              {userBookings
                .filter((b) => !b.completed)
                .map((booking) => (
                  <BookingCard
                    key={booking.id}
                    venueName={booking.venue.name}
                    location={booking.venue.location}
                    date={booking.bookingDate}
                    startTime={booking.timeSlot.startTime}
                    endTime={booking.timeSlot.endTime}
                    price={booking.venue.price}
                    bookingId={booking.id}
                    onDelete={handleDeleteBooking}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooking;
