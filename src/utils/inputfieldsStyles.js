export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f3f6ed", // Change border color
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(39, 212, 131)", // Change border color on hover
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(39, 212, 131)", // Change border color when focused
  },
  "& .MuiSelect-select": {
    color: "#f3f6ed", // Change text color of selected value
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
};

export const multiLineStyle = {
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
};
