import { useEffect, useState } from "react";
import Card from "../card/Card";

import "./serviceComponent.scss";
import axios from "axios";

const ServiceComponent = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/services");

      setServices(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className='serviceComponent'>
      <h2>Our Services</h2>
      <div className='serviceComponent__cards'>
        {services?.map((service) => (
          <Card
            key={service.id}
            img={service.image}
            header={service.serviceName}
            desc={service.description}
            btnText='Browse Venues'
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
