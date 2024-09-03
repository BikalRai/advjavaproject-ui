import SecondaryButton from "../button/SecondaryButton";
import MatchCard from "../card/MatchCard";
import "./matchComponent.scss";

const HomeMatchComponent = () => {
  return (
    <div className='matchComponent'>
      <h2>Matches</h2>
      <div className='matchComponent__cards'>
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
      <div className='btn__container'>
        <SecondaryButton btnText='View all matches' />
      </div>
    </div>
  );
};

export default HomeMatchComponent;
