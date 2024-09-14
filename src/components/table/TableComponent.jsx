import { RiEditCircleFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import PropType from "prop-types";
import "./tableComponent.scss";

const TableComponent = ({ allUsers, deleteFunc }) => {
  return (
    <div className='table__container'>
      <table className='table'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Image</th>
            <th>No. of bookings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${user.image}`}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </td>
              <td>11</td>
              <td className='actions'>
                <RiEditCircleFill className='icon' title='Edit' />
                <MdDeleteForever
                  className='icon'
                  title='Delete'
                  onClick={() => deleteFunc(user.id)}
                />
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>Bikal</td>
            <td>Rai</td>
            <td>bikalrai2785@gmail.com</td>
            <td>9818761745</td>
            <td>
              <img src='' alt='' />
            </td>
            <td>11</td>
            <td className='actions'>
              <RiEditCircleFill className='icon' title='Edit' />
              <MdDeleteForever className='icon' title='Delete' />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Bikal</td>
            <td>Rai</td>
            <td>bikalrai2785@gmail.com</td>
            <td>9818761745</td>
            <td>
              <img src='' alt='' />
            </td>
            <td>11</td>
            <td className='actions'>
              <RiEditCircleFill className='icon' />
              <MdDeleteForever className='icon' />
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  allUsers: PropType.array,
  deleteFunc: PropType.func,
};

export default TableComponent;
