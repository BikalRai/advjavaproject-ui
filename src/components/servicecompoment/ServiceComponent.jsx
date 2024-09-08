import { useEffect, useState } from "react";
import Card from "../card/Card";

import "./serviceComponent.scss";
import axios from "axios";

const ServiceComponent = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users");

      console.log(res);
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
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ServiceComponent;
