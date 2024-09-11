import VenueCard from "../../card/VenueCard";
import "./uservenues.scss";

const UserVenue = () => {
  const counts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className='userVenues'>
      <div className='userVenues__hero'></div>

      <div className='userVenues__venues container'>
        <h1>Venues</h1>
        <div className='userVenues__venues--display'>
          {counts.map((_, i) => (
            <VenueCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserVenue;
