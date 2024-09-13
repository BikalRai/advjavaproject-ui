export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f3f6ed", // Default border color
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(39, 212, 131)", // Border color on hover
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(39, 212, 131)", // Border color when focused
  },
  "& .MuiSelect-select": {
    color: "#f3f6ed", // Text color of selected value
    // Styles for autofill
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #1e1e1e inset", // Background color for autofill
      WebkitTextFillColor: "#f3f6ed", // Text color for autofill
    },
  },
  "& .MuiInputLabel-root": {
    color: "#f3f6ed", // Label color
    "&.Mui-focused": {
      color: "rgb(39, 212, 131)", // Label color when focused
    },
  },
  "& .MuiInputBase-input": {
    color: "#f3f6ed", // Input text color
    "&::placeholder": {
      color: "#f3f6ed", // Placeholder color
    },
  },
};

export const multiLineStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f3f6ed", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "rgb(39, 212, 131)", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(39, 212, 131)", // Border color when focused
    },
  },
  "& .MuiInputLabel-root": {
    color: "#f3f6ed", // Label color
    "&.Mui-focused": {
      color: "rgb(39, 212, 131)", // Label color when focused
    },
  },
  "& .MuiInputBase-input": {
    color: "#f3f6ed", // Input text color
    "&::placeholder": {
      color: "#f3f6ed", // Placeholder color
    },
  },
};
