import { FaRegHeart } from "react-icons/fa";
import PropType from "prop-types";
import "./venucard.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { spinnerOverride } from "../../utils/spinnerCssOverride";

const VenueCard = ({ title, location, price, img, venueId }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const generateTimeSlot = async (id) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post(
        `http://localhost:8080/api/venues/${id}/timeslots`,
        {},
        config
      );

      if (res.data) {
        navigate(`/venues/${id}`);
      }

      console.log(res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <PropagateLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <div className='venueCard'>
          <div className='venueCard__img'>
            <img src={`data:image/jpeg;base64, ${img}`} alt={title} />
          </div>
          <div className='venueCard__content'>
            <h3 className='venueCard__content--title'>{title}</h3>
            <p className='venueCard__content--bodytext'>Location: {location}</p>
            <p className='venueCard__content--bodytext'>rating: ⭐⭐⭐</p>
            <p className='venueCard__content--bodytext'>Price: rs. {price}</p>
            <div className='venueCard__content--actions'>
              <button
                className='btn__primary'
                onClick={() => generateTimeSlot(venueId)}
              >
                Click to view times
              </button>
              <FaRegHeart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

VenueCard.propTypes = {
  title: PropType.string,
  location: PropType.string,
  price: PropType.number,
  img: PropType.string,
  venueId: PropType.number,
};

export default VenueCard;
