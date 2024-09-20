import { useEffect, useState } from "react";
import VenueCard from "../../card/VenueCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { spinnerOverride } from "../../../utils/spinnerCssOverride";
import "./uservenues.scss";

const UserVenue = () => {
  const [venues, setVenues] = useState([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const getAllVenues = async () => {
    setLoading(true);
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
      if (error.response.status === 403 || error.response.status === 401) {
        navigate("/forbidden");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVenues();
  }, []);

  console.log(venues);

  return (
    <div className='userVenues'>
      {loading ? (
        <PacmanLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default UserVenue;
