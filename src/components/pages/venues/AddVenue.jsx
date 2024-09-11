import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  textFieldStyle,
  multiLineStyle,
} from "../../../utils/inputfieldsStyles";
import ImageUpload from "../../imageUpload/ImageUpload";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./addvenue.scss";
import axios from "axios";

const AddVenue = () => {
  const [uploadImage, setUploadImage] = useState("");
  const [venueDetails, setVenueDetails] = useState({
    venueName: "",
    location: "",
    description: "",
    amenities: "",
    openingTime: "",
    closingTime: "",
    price: "",
    slotDurationMinutes: 60,
  });

  const handleImageUpload = (base64String) => {
    setUploadImage(base64String);
  };

  const handleInputValue = ({ target: { name, value } }) => {
    setVenueDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleVenueDetailsSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/venues/create", {
        name: venueDetails.venueName,
        location: venueDetails.location,
        description: venueDetails.description,
        amenities: venueDetails.amenities,
        openingTime: venueDetails.openingTime,
        closingTime: venueDetails.closingTime,
        price: venueDetails.price,
        slotDurationMinutes: 60,
        image: uploadImage,
      });

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='addVenue'>
      <h1>
        Add a Venue{" "}
        <Link to='/venues'>
          <IoMdArrowRoundBack />
        </Link>
      </h1>
      <form className='addVenue__add' onSubmit={handleVenueDetailsSubmit}>
        <div className='addVenue__add--fields'>
          <TextField
            id='outlined-basic'
            label='Venue Name'
            variant='outlined'
            sx={textFieldStyle}
            name='venueName'
            onChange={handleInputValue}
            value={venueDetails.venueName}
          />

          <TextField
            id='outlined-basic'
            label='Location'
            variant='outlined'
            sx={textFieldStyle}
            name='location'
            onChange={handleInputValue}
            value={venueDetails.location}
          />

          <TextField
            id='outlined-basic'
            label='Description'
            variant='outlined'
            sx={multiLineStyle}
            name='description'
            onChange={handleInputValue}
            value={venueDetails.description}
            multiline
            maxRows={4}
          />

          <TextField
            id='outlined-basic'
            label='Amenities'
            variant='outlined'
            sx={multiLineStyle}
            name='amenities'
            onChange={handleInputValue}
            value={venueDetails.amenities}
            multiline
            maxRows={4}
          />

          <div className='field'>
            <label htmlFor='openingTime'>Opening Time</label>
            <input
              type='time'
              id='openingTime'
              name='openingTime'
              onChange={handleInputValue}
              value={venueDetails.openingTime}
            />
          </div>
          <div className='field'>
            <label htmlFor='closingTime'>Closing Time</label>
            <input
              type='time'
              id='closingTime'
              name='closingTime'
              onChange={handleInputValue}
              value={venueDetails.closingTime}
            />
          </div>

          <TextField
            id='outlined-basic'
            label='Price'
            variant='outlined'
            sx={textFieldStyle}
            name='price'
            onChange={handleInputValue}
            value={venueDetails.price}
          />
          <FormControl>
            <InputLabel id='demo-simple-select-label'>Slot Duration</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={venueDetails.slotDurationMinutes}
              label='Slot Duration'
              onChange={handleInputValue}
              sx={{
                ...textFieldStyle,
              }}
            >
              <MenuItem value={60}>60</MenuItem>
              {/* <MenuItem value={90}>90</MenuItem>
            <MenuItem value={120}>120</MenuItem> */}
            </Select>
          </FormControl>
        </div>

        <ImageUpload onImageUpload={handleImageUpload} />

        <button className='btn__primary'>Add</button>
      </form>
    </div>
  );
};

export default AddVenue;
