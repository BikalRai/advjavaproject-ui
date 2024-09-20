import { useLocation, useNavigate } from "react-router-dom";
import "./paymentdetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const PaymentDetails = () => {
  const [paymentDetails, setPaymentDetails] = useState({});

  const location = useLocation();
  const { bookingId } = location.state;

  const navigate = useNavigate();

  const getPaymentDetails = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get(
        `http://localhost:8080/api/payment/details/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPaymentDetails(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getPaymentDetails(bookingId);
  }, [bookingId]);

  return (
    <div className='paymentDetails container'>
      <form className='paymentDetails__form'>
        <h3>Payment Details</h3>
        <p>
          <strong>Transaction ID: </strong>
          {paymentDetails.transactionId}
        </p>
        <p>
          <strong>Venue: </strong>
          {paymentDetails.venueName}
        </p>
        <p>
          <strong>Location: </strong>
          {paymentDetails.location}
        </p>
        <p>
          <strong>Date: </strong>
          {paymentDetails.date}
        </p>
        <p>
          <strong>Time: </strong>
          {paymentDetails.startTime} to {paymentDetails.endTime}
        </p>
        <p>
          <strong>Price: </strong>
          Rs. {paymentDetails.price}
        </p>
        <div className='paymentDetails__form--actions'>
          <button type='button' className='btn__primary'>
            Pay with eSewa
          </button>
          <button
            type='button'
            className='btn__secondary'
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
