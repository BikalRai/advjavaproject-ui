import PropType from 'prop-types';
import './buttons.scss';

const SecondaryButton = ({ btnText }) => {
  return <button className="btn btn__secondary">{btnText}</button>;
};

SecondaryButton.propTypes = {
  btnText: PropType.string,
};

export default SecondaryButton;
