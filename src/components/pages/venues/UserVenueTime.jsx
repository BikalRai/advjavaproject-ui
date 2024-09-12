import { useEffect, useState } from "react";
import axios from "axios";
import "./venueDetails.scss";

const UserVenueTime = () => {
  const [venueDetails, setVenueDetails] = useState({});
  const [timeslots, setTimeSlots] = useState([]);

  const getAllVenueData = async (id) => {
    try {
      const venueRes = await axios.get(
        `http://localhost:8080/api/venues/${id}`
      );

      setVenueDetails(venueRes.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllVenueTimeSlots = async (id) => {
    try {
      const timeRes = await axios.get(`http://localhost:8080/api/time/${id}`);

      setTimeSlots(timeRes.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllVenueData(1);
    getAllVenueTimeSlots(1);
  }, []);

  console.log(venueDetails);
  console.log(timeslots);
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
        {/* {timeslots.map((timeslot) => (
          
        ))} */}
      </div>
    </div>
  );
};

export default UserVenueTime;
