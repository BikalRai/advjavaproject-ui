import { useEffect, useState } from "react";
import DashboardCard from "../../card/DashboardCard";
import axios from "axios";
import { dateIsToday } from "../../../utils/dateChecker";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { FaUsers } from "react-icons/fa";
import { RiBuilding3Fill } from "react-icons/ri";
import { AiFillSchedule } from "react-icons/ai";

import LineGraph from "../../chart/Line";
import { countUsersByMonth } from "../../../utils/graphUtils";
import "./dashboard.scss";

const DashBoard = () => {
  const [dashboardItems, setDashboarditems] = useState({
    users: [],
    bookings: [],
    venues: [],
    revenue: [],
  });

  const [userCountsByMonth, setUserCountsByMonth] = useState(Array(12).fill(0));

  console.log(countUsersByMonth, "first!!");

  const getData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const userRes = await axios.get(
        `http://localhost:8080/api/users/role/${"ROLE_USER"}`,
        config
      );

      console.log(userRes, "userRes");
      setUserCountsByMonth(countUsersByMonth(userRes.data));

      const bookingsRes = await axios.get(
        "http://localhost:8080/api/bookings",
        config
      );
      console.log(bookingsRes, "bookingsRes");
      const venuesRes = await axios.get(
        "http://localhost:8080/api/venues",
        config
      );

      console.log(venuesRes, "venueRes");

      setDashboarditems((prev) => ({
        ...prev,
        users: userRes.data,
        bookings: bookingsRes.data,
        venues: venuesRes.data,
      }));

      console.log(dashboardItems);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getNewUsersCount = () => {
    return dashboardItems.users.filter((user) => dateIsToday(user.createdDate));
  };

  const getNewVenuesCount = () => {
    return dashboardItems.venues.filter((venue) =>
      dateIsToday(venue.createdAt)
    );
  };

  const getNewBookingsCount = () => {
    return dashboardItems.bookings.filter((booking) =>
      dateIsToday(booking.bookingDate)
    );
  };

  useEffect(() => {
    getData();

    // websocket connection
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      // Subscribe to the user topic for real-time updates
      stompClient.subscribe("/topic/users", (message) => {
        const newUser = JSON.parse(message.body);
        setDashboarditems((prev) => ({
          ...prev,
          users: [...prev.users, newUser],
        }));
      });
    });

    // clean up the websocket connection when component mounts
    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.disconnect();
      }
    };
  }, []);

  const lineChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Users per Month",
        data: userCountsByMonth,
        backgroundColor: "#27d483",
        pointRadius: 10,
      },
    ],
  };

  console.log(userCountsByMonth, "COUNT!!!!");

  return (
    <div className='dashboard'>
      <h1>DASHBOARD</h1>

      <div className='dashboard__cards'>
        <DashboardCard
          title='Total Users'
          cardCount={dashboardItems.users.length}
          cardNewVal={getNewUsersCount().length}
          cardDesc='New Users Today'
          icon={<FaUsers />}
        />
        <DashboardCard
          title='Total Venues'
          cardCount={dashboardItems.venues.length}
          cardNewVal={getNewVenuesCount().length}
          cardDesc='New Venues Today'
          icon={<RiBuilding3Fill />}
        />
        <DashboardCard
          title='Total Bookings'
          cardCount={dashboardItems.bookings.length}
          cardNewVal={getNewBookingsCount().length}
          cardDesc='New Bookings Today'
          icon={<AiFillSchedule />}
        />
      </div>

      <LineGraph userData={lineChartData} className='dashboard__lineChart' />

      {/* <div className='dashboard__newUsers'>
        <div className='dashboard__newUsers--head'>
          <h3>
            New User <span>|</span> <span>Today</span>
          </h3>
          <Link to='/users' className='btn__dark'>
            View all users
          </Link>
        </div>

        <div className='dashboard__newUsers--body'></div>
      </div> */}
    </div>
  );
};

export default DashBoard;
