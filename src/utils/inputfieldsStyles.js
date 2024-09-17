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

export const bottomBorderInput = {
  "& .MuiInputBase-input": {
    color: "#2a2b2d", // Font color
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#2a2b2d", // Default underline color
  },
  "&:hover .MuiInput-underline:before": {
    borderBottomColor: "rgb(39, 212, 131)", // Underline color on hover
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2a2b2d", // Underline color when focused
  },
  "& .MuiFormLabel-root": {
    color: "#2a2b2d", // Label color
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#2a2b2d", // Label color when focused
  },
};

export const formControlStyles = {
  m: 1,
  "& .MuiInputLabel-root": {
    color: "#dee3e1", // Label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#27d483", // Label color when focused
  },
  "& .MuiInputBase-input": {
    color: "#dee3e1", // Input text color
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#dee3e1", // Default underline color
  },
  "&:hover .MuiInput-underline:before": {
    borderBottomColor: "#dee3e1", // Underline color on hover
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#27d483", // Underline color when focused
  },
};

export const formControlOutlinedStyles = {
  m: 1,
  "& .MuiInputLabel-root": {
    color: "#dee3e1", // Label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#27d483", // Label color when focused
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#dee3e1", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#dee3e1", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#27d483", // Border color when focused
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "#dee3e1", // Input text color
  },
  "& .MuiIconButton-root": {
    color: "#dee3e1", // Icon color
  },
};
