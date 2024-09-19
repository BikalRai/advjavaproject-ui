import PropType from "prop-types";
import "./dashboardCard.scss";

const DashboardCard = ({ title, cardCount, cardNewVal, cardDesc, icon }) => {
  return (
    <div className='dashboardCard'>
      <h3 className='dashboardCard__title'>{title}</h3>
      <div className='dashboardCard__body'>
        <div className='dashboardCard__body--count'>{cardCount}</div>
        {icon}
      </div>
      <div className='dashboardCard__foot'>
        <span className='digits'>{cardNewVal ? cardNewVal : 0}</span> {cardDesc}
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropType.string,
  cardCount: PropType.number,
  cardNewVal: PropType.number,
  cardDesc: PropType.string,
  icon: PropType.element,
};

export default DashboardCard;
