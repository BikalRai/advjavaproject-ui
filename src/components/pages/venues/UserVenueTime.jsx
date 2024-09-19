import { useEffect, useState } from "react";

import axios from "axios";
import TimeCard from "../../card/TimeCard";
import "./venueDetails.scss";
import { useNavigate, useParams } from "react-router-dom";

const UserVenueTime = () => {
  const [venueDetails, setVenueDetails] = useState({});
  const [timeslots, setTimeSlots] = useState([]);

  const { venueId } = useParams();
  const navigate = useNavigate();

  const getAllVenueData = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      const venueRes = await axios.get(
        `http://localhost:8080/api/venues/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setVenueDetails(venueRes.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllVenueTimeSlots = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      const timeRes = await axios.get(`http://localhost:8080/api/time/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTimeSlots(timeRes.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBookingComplete = (timeId) => {
    // Update the local state to reflect the booking
    setTimeSlots((prevTimeSlots) =>
      prevTimeSlots.map((slot) =>
        slot.id === timeId ? { ...slot, available: false } : slot
      )
    );

    navigate("/mybookings");
  };

  useEffect(() => {
    getAllVenueData(venueId);
    getAllVenueTimeSlots(venueId);
  }, [venueId]);

  return (
    <div className='venue'>
      <div className='venue__details container'>
        <div className='venue__details--body'>
          <h1 className='venue__details--body-title'>{venueDetails.name}</h1>
          <p className='venue__details--body-text'>
            <span>Description:</span> {venueDetails.description}
          </p>
          <p className='venue__details--body-text'>
            <span>Location:</span>
            {venueDetails.location}
          </p>
          <p className='venue__details--body-text'>
            <span>Amenities: </span>
            {venueDetails.amenities}
          </p>
          <p className='venue__details--body-text'>
            <span>Opening Time:</span>
            {venueDetails.openingTime}
          </p>
          <p className='venue__details--body-text'>
            <span>Closing Time: </span>
            {venueDetails.closingTime}
          </p>
          <p className='venue__details--body-text'>
            <span>Price: </span>
            {venueDetails.price}
          </p>
        </div>
        <div className='venue__details--img'>
          <img src={`data:image/jpeg;base64, ${venueDetails.image}`} alt='' />
        </div>
      </div>

      <div className='venue__timeslots container '>
        <h1>Available Time Slots</h1>
        <div className='venue__timeslots--slots'>
          {/* {timeslots.map(
            (timeslot) =>
              timeslot.available && (
                <TimeCard
                  key={timeslot.id}
                  startTime={timeslot.startTime}
                  endTime={timeslot.endTime}
                  price={venueDetails.price}
                  timeId={timeslot.id}
                  venueId={venueDetails.id}
                  bookDate={timeslot.date}
                />
              )
          )} */}

          {timeslots
            .filter((time) => time.available)
            .map((timeslot) => (
              <TimeCard
                key={timeslot.id}
                startTime={timeslot.startTime}
                endTime={timeslot.endTime}
                price={venueDetails.price}
                timeId={timeslot.id}
                venueId={venueDetails.id}
                bookDate={timeslot.date}
                onBookingComplete={handleBookingComplete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserVenueTime;
