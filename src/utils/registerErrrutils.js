const initialErrors = {
  passwordErr: false,
  passwordLengthErr: false,
  emailErr: false,
  phoneErr: false,
  emailFormatErr: false,
  phoneFormatErr: false,
  passwordFormatErr: false,
  passwordMatchErr: false,
};

const errReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, [action.field]: true };
    case "CLEAR_ERROR":
      return { ...state, [action.field]: false };
    case "RESET_ERRORS":
      return initialErrors;
    default:
      return state;
  }
};

export { initialErrors, errReducer };
