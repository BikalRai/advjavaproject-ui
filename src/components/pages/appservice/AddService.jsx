import { useState } from "react";
import "./addservice.scss";
import ImageUpload from "../../imageUpload/ImageUpload";
import axios from "axios";
import { TextField } from "@mui/material";

const AddService = () => {
  const [inputValue, setInputValue] = useState({
    serviceName: "",
    description: "",
  });

  const [uploadImage, setUploadImage] = useState("");

  const handleInputValue = ({ target }) => {
    const { name, value } = target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (base64String) => {
    setUploadImage(base64String);
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/services/add", {
        serviceName: inputValue.serviceName,
        description: inputValue.description,
        image: uploadImage,
      });

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='addService'>
      <h1>Add a service</h1>
      <form
        className='addService__form'
        method='POST'
        onSubmit={handleServiceSubmit}
      >
        <TextField
          id='outlined-basic'
          label='Service Name'
          variant='outlined'
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f3f6ed", // Change border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(39, 212, 131)", // Change border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(39, 212, 131)", // Change border color when focused
            },
            "& input": {
              color: "#f3f6ed", // Change input text color
              // Styles for autofill
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px #1e1e1e inset", // Change background color to match your design
                WebkitTextFillColor: "#f3f6ed", // Change text color for autofill
              },
            },
            "& .MuiInputLabel-root": {
              color: "#f3f6ed", // Change label color
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#f3f6ed", // Change placeholder color
            },
          }}
          name='serviceName'
          onChange={handleInputValue}
          value={inputValue.serviceName}
        />

        <TextField
          id='outlined-basic'
          label='Service Description'
          variant='outlined'
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f3f6ed", // Change border color
              },
              "&:hover fieldset": {
                borderColor: "rgb(39, 212, 131)", // Change border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgb(39, 212, 131)", // Change border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "#f3f6ed", // Change label color
            },
            "& .MuiInputBase-input": {
              color: "#f3f6ed", // Change input text color
              "&::placeholder": {
                color: "#f3f6ed", // Change placeholder color
              },
            },
          }}
          name='description'
          onChange={handleInputValue}
          value={inputValue.description}
          multiline
          maxRows={4}
        />

        <ImageUpload onImageUpload={handleImageUpload} />

        <button className='btn__secondary'>Add</button>
      </form>
    </div>
  );
};

export default AddService;
