import PropType from "prop-types";
import "./inputfield.scss";

const InputField = ({
  type = "text",
  name,
  handleOnChange,
  value,
  multiLine,
  rows,
}) => {
  return (
    <div className={`inputField ${value ? "float" : ""}`}>
      {multiLine ? (
        <textarea
          id={name}
          name={name}
          onChange={handleOnChange}
          value={value}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          onChange={handleOnChange}
          value={value}
        />
      )}

      <label htmlFor={name}>
        {name[0].toUpperCase() + name.slice(1).toLowerCase()}
      </label>
    </div>
  );
};

InputField.propTypes = {
  type: PropType.string,
  name: PropType.string,
  handleOnChange: PropType.func,
  value: PropType.string,
  multiLine: PropType.bool,
  rows: PropType.number,
};

export default InputField;
