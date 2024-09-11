import { FaDeleteLeft } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./appservice.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AppService = () => {
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/services");

      setServices(res.data);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/services/delete/${id}`
      );

      setServices((prev) => prev.filter((service) => service.id !== id));
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div className='appService'>
      <h1>Services</h1>
      <div className='appService__top'>
        <form action=''>
          <input type='search' placeholder='search' />
          <FaSearch />
        </form>
        <Link to='/services/add'>
          <button className='btn__primary add'>Add</button>
        </Link>
      </div>

      <table className='appService__services'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Image</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          {services?.map((service) => (
            <tr key={service.id}>
              <td>{service.serviceName}</td>
              <td>{service.description}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64, ${service.image}`}
                  alt='Futsal Image'
                />
              </td>
              <td className='actions'>
                <MdEditSquare className='actions__icons' />
                <FaDeleteLeft
                  className='actions__icons'
                  onClick={() => handleDeleteService(service.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <AppServiceTable /> */}
    </div>
  );
};

export default AppService;
