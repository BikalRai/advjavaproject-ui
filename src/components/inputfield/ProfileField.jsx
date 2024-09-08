import { MdEditSquare } from "react-icons/md";
import PropType from "prop-types";
import "./field.scss";

const ProfileField = ({
  type = "text",
  handleFunc,
  name,
  isEditable,
  setIsEditable,
  value,
}) => {
  return (
    <div className='profileField'>
      <div className='profileField__field'>
        <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}: </label>
        <input
          type={type}
          value={value}
          name={name}
          id={name}
          onChange={handleFunc}
          readOnly={isEditable}
        />
      </div>
      <MdEditSquare className='profileField__icon' onClick={setIsEditable} />
    </div>
  );
};

ProfileField.propTypes = {
  type: PropType.string,
  name: PropType.string,
  handleFunc: PropType.func,
  value: PropType.string,
  isEditable: PropType.bool,
  setIsEditable: PropType.func,
};

export default ProfileField;
