import PropType from 'prop-types';
import './buttons.scss';

const PrimaryButton = ({ btnText }) => {
  return <button className="primary__btn btn btn__primary">{btnText}</button>;
};

PrimaryButton.propTypes = {
  btnText: PropType.string,
};

export default PrimaryButton;
