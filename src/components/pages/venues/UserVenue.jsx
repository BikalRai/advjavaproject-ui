import { useEffect, useState } from "react";
import VenueCard from "../../card/VenueCard";
import "./uservenues.scss";
import axios from "axios";

const UserVenue = () => {
  const [venues, setVenues] = useState([]);

  const getAllVenues = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get("http://localhost:8080/api/venues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setVenues(res?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllVenues();
  }, []);

  console.log(venues);

  return (
    <div className='userVenues'>
      <div className='userVenues__hero'></div>

      <div className='userVenues__venues container'>
        <h1>Venues</h1>
        <div className='userVenues__venues--display'>
          {Array.isArray(venues) &&
            venues.map((venue) => (
              <VenueCard
                key={venue.id}
                venueId={venue.id}
                title={venue.name}
                location={venue.location}
                price={venue.price}
                img={venue.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserVenue;
