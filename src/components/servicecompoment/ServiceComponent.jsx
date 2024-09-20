import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import "./serviceComponent.scss";

const ServiceComponent = () => {
  // const [services, setServices] = useState([]);

  const navigate = useNavigate();

  // const getServices = async () => {
  //   try {
  //     // get token from localstorage and set it

  //     const res = await axios.get("http://localhost:8080/api/services");

  //     setServices(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const handleVenueService = () => {
    navigate("/venues");
  };

  // useEffect(() => {
  //   getServices();
  // }, []);

  return (
    <div className='serviceComponent'>
      <h2>Our Services</h2>
      <div className='serviceComponent__cards'>
        {/* {services?.map((service) => (
          <Card
            key={service.id}
            img={service.image}
            header={service.serviceName}
            desc={service.description}
            btnText='Browse Venues'
          />
        ))} */}

        <Card
          img='/images/service1.png'
          header='Book Venue'
          desc='Browse different venues to book a spot for your team'
          btnText='view Venues'
          navigationHandleFunc={handleVenueService}
        />
        <Card
          img='/images/service1.png'
          header='Match'
          desc='Look for or accept matches to play against other teams'
          btnText='Browse Matches'
        />
        <Card
          img='/images/service1.png'
          header='Event'
          desc='Seamlessly organize an event at the location of your choice'
          btnText='Organize Event'
        />
        <Card
          img='/images/service1.png'
          header='Coach'
          desc='Become and register as a coach to share your expertise at all levels'
          btnText='Become a Coach'
        />
      </div>
    </div>
  );
};

export default ServiceComponent;
