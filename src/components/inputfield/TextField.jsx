import { RxAvatar } from "react-icons/rx";
import PropType from "prop-types";
import "./inputfield.scss";

const TextField = ({
  type = "text",
  name,
  value,
  id,
  valueRef,
  onChangeFunc,
  error,
}) => {
  return (
    <div className={`textField ${name ? "filled" : ""}`}>
      <div className='field'>
        <input
          type={type}
          id={id}
          name={name}
          ref={valueRef}
          onChange={onChangeFunc}
          value={value}
        />
        <RxAvatar className='icon' />
      </div>
      <p className='err'>{error && `Username or Email does not exist!!`}</p>
      <label htmlFor={id}>
        {`${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`}{" "}
      </label>
    </div>
  );
};

TextField.propTypes = {
  type: PropType.string,
  id: PropType.string,
  name: PropType.string,
  valueRef: PropType.func,
  onChangeFunc: PropType.func,
  value: PropType.string,
  error: PropType.bool,
};

export default TextField;
