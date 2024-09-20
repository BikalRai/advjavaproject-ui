import PropType from "prop-types";
import "./buttons.scss";

const SecondaryButton = ({ btnText, onClickFunc }) => {
  return (
    <button className='btn btn__secondary' onClick={onClickFunc}>
      {btnText}
    </button>
  );
};

SecondaryButton.propTypes = {
  btnText: PropType.string,
  onClickFunc: PropType.func,
};

export default SecondaryButton;
