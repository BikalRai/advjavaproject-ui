import PropType from "prop-types";
import "./inputField.scss";

const InputField = ({ type = "text", name, inputPlaceholder }) => {
  return (
    <input type={type} id={name} name={name} placeholder={inputPlaceholder} />
  );
};

InputField.propTypes = {
  type: PropType.string,
  name: PropType.string,
  inputPlaceholder: PropType.string,
};

export default InputField;
