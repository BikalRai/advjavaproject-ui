import { useState } from "react";
import PropType from "prop-types";
import "./floatingInput.scss";

const FloatingLabelInput = ({
  inputValue,
  setInputValue,
  fieldName,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`floatingInput ${
        inputValue || isFocused ? "float-label" : ""
      }`}
    >
      <label htmlFor={fieldName}>{label}</label>
      <input
        type='text'
        onChange={(e) => setInputValue(e)}
        name={fieldName}
        value={inputValue ? inputValue : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

FloatingLabelInput.propTypes = {
  inputValue: PropType.string,
  setInputValue: PropType.func,
  fieldName: PropType.string,
  label: PropType.string,
};

export default FloatingLabelInput;
