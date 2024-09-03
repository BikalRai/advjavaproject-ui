import Card from "../card/Card";

import "./serviceComponent.scss";

const ServiceComponent = () => {
  return (
    <div className='serviceComponent'>
      <h2>Our Services</h2>
      <div className='serviceComponent__cards'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ServiceComponent;
