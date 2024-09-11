import { TextField } from "@mui/material";
import PropType from "prop-types";

const FormTextField = ({ handleInputValue, inputValue, name }) => {
  return (
    <TextField
      id='outlined-basic'
      label={name}
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
      value={inputValue}
    />
  );
};

FormTextField.propTypes = {
  handleInputValue: PropType.func,
  inputValue: PropType.object,
  name: PropType.string,
};

export default FormTextField;
