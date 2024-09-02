import "./heroCarousel.scss";

const HeroCarousel = () => {
  const images = ["/images/heroimg.png", "/images/heroimg2.png"];

  return (
    <div className='hero__carousel'>
      <div className='images'>
        <img src={images[0]} alt={`${"images[0]"} image`} />
        <img src={images[1]} alt={`${"images[1]"} image`} />
        <img src={images[2]} alt={`${"images[2]"} image`} />
      </div>
    </div>
  );
};

export default HeroCarousel;
