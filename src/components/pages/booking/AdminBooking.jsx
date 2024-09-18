import BookingTable from "../../table/BookingTable";
import "./adminbooking.scss";

const AdminBooking = () => {
  return (
    <div className='adminBooking'>
      <h1>Bookings</h1>
      <BookingTable />
    </div>
  );
};

export default AdminBooking;
