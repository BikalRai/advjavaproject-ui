import { useState } from "react";
import { TextField } from "@mui/material";
import {
  textFieldStyle,
  multiLineStyle,
} from "../../../utils/inputfieldsStyles";
import ImageUpload from "../../imageUpload/ImageUpload";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./addvenue.scss";

const AddVenue = () => {
  const [uploadImage, setUploadImage] = useState("");
  const handleImageUpload = (base64String) => {
    setUploadImage(base64String);
  };
  return (
    <div className='addVenue'>
      <h1>
        Add a Venue{" "}
        <Link to='/venues'>
          <IoMdArrowRoundBack />
        </Link>
      </h1>
      <form className='addVenue__add'>
        <div className='addVenue__add--fields'>
          <TextField
            id='outlined-basic'
            label='Venue Name'
            variant='outlined'
            sx={textFieldStyle}
            name='venueName'
            //   onChange={handleInputValue}
            //   value={inputValue}
          />

          <TextField
            id='outlined-basic'
            label='Location'
            variant='outlined'
            sx={textFieldStyle}
            name='location'
            //   onChange={handleInputValue}
            //   value={inputValue}
          />

          <TextField
            id='outlined-basic'
            label='Description'
            variant='outlined'
            sx={multiLineStyle}
            name='description'
            //   onChange={}
            //   value={}
            multiline
            maxRows={4}
          />

          <TextField
            id='outlined-basic'
            label='anemities'
            variant='outlined'
            sx={multiLineStyle}
            name='anemities'
            //   onChange={}
            //   value={}
            multiline
            maxRows={4}
          />

          <div className='field'>
            <label htmlFor='openingTime'>Opening Time</label>
            <input type='time' id='openingTime' name='openingTime' />
          </div>
          <div className='field'>
            <label htmlFor='closingTime'>Closing Time</label>
            <input type='time' id='closingTime' name='closingTime' />
          </div>

          <TextField
            id='outlined-basic'
            label='Price'
            variant='outlined'
            sx={textFieldStyle}
            name='price'
            //   onChange={handleInputValue}
            //   value={inputValue}
          />
        </div>

        <ImageUpload onImageUpload={handleImageUpload} />

        <button className='btn__primary'>Add</button>
      </form>
    </div>
  );
};

export default AddVenue;
