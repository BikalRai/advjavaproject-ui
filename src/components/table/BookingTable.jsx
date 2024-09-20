import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import { textFieldStyle } from "../../utils/inputfieldsStyles";
import "./bookingtable.scss";
import { PacmanLoader } from "react-spinners";
import { spinnerOverride } from "../../utils/spinnerCssOverride";

const BookingTable = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllBookings = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get("http://localhost:8080/api/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllBookings(res?.data);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  const filteredBookings = allBookings?.filter((b) => {
    const searchLower = search?.toLowerCase();

    return searchLower === ""
      ? true
      : b?.user?.firstName?.toLowerCase().includes(searchLower) ||
          b?.user?.lastName?.toLowerCase().includes(searchLower) ||
          `User id: ${b?.user?.id}`.toLowerCase().includes(searchLower) ||
          b?.bookingDate?.toLowerCase().includes(searchLower) ||
          b?.venue?.name?.toLowerCase().includes(searchLower) ||
          `${b?.timeSlot?.startTime} to ${b?.timeSlot?.endTime}`
            .toLowerCase()
            .includes(searchLower);
  });

  return (
    <div className='bookingTable'>
      {loading ? (
        <PacmanLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <>
          <TextField
            id='outlined-basic'
            label='Type to search...'
            variant='outlined'
            sx={{ ...textFieldStyle, width: "fit-content" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <table className='table'>
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Booked By</th>
                <th>Booking Date</th>
                <th>Venue</th>
                <th>Time</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking?.id}>
                  <td>{booking.id}</td>
                  <td>
                    {booking.user.firstName
                      ? `${booking.user.firstName} ${booking.user.lastName}`
                      : `User id: ${booking.user.id}`}
                  </td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.venue.name}</td>
                  <td>{`${booking.timeSlot.startTime} to ${booking.timeSlot.endTime}`}</td>
                  <td>{booking.price}</td>
                  <td>{booking.completed ? "Done" : "Pending"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default BookingTable;
