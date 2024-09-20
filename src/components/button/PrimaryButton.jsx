import PropType from "prop-types";
import "./buttons.scss";

const PrimaryButton = ({ btnText, onClickFunc }) => {
  return (
    <button className='primary__btn btn btn__primary' onClick={onClickFunc}>
      {btnText}
    </button>
  );
};

PrimaryButton.propTypes = {
  btnText: PropType.string,
  onClickFunc: PropType.func,
};

export default PrimaryButton;
