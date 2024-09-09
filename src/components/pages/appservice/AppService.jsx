import { FaDeleteLeft } from "react-icons/fa6";
import "./appservice.scss";
import { MdEditSquare } from "react-icons/md";
import AppServiceTable from "./AppServiceTable";
import { FaSearch } from "react-icons/fa";

const AppService = () => {
  return (
    <div className='appService'>
      <h1>Services</h1>
      <div className='appService__top'>
        <form action=''>
          <input type='search' placeholder='search' />
          <FaSearch />
        </form>
        <button className='btn__primary add'>Add</button>
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
          <tr>
            <td>Futsal </td>
            <td>
              Book a futsal ground for your team or your circle of friends.
            </td>
            <td>
              <img src='' alt='Futsal Image' />
            </td>
            <td className='actions'>
              <MdEditSquare className='actions__icons' />
              <FaDeleteLeft className='actions__icons' />
            </td>
          </tr>
        </tbody>
      </table>
      {/* <AppServiceTable /> */}
    </div>
  );
};

export default AppService;
