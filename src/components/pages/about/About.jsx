import "./about.scss";

const About = () => {
  return (
    <div className='about'>
      <div className='about__hero'>
        <div className='overlay'></div>
      </div>
      <div className='about__body container'>
        <h3>About</h3>
        <p>
          Since modern football has influenced the general population, the craze
          for futsal has increased a lot in Nepal where it has seen a rise in
          the number of futsal venues being opened in various locations
          throughout the country, but still there are still issues with bookings
          and finding a venue at an appropriate time, and there has been issues
          with keeping up with technology. Hence, KickSpot is here to address
          the issues and aims to provide a seamless experience for all the
          players and users. KickSpot is developed by my, Bikal Rai, where this
          is my college project, with the aim of revolutionalizing the futsal
          sector with booking ease, and with aspirations to provide a
          comprehensive one stop solution for all futsal enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default About;
