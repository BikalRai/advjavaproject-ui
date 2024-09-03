import { useEffect, useState } from "react";
import "./eventCarousel.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const bgImgs = [
  "https://www.b360nepal.com/storage/wp-content/uploads/2023/01/Futsal-tournament-5.jpg",
  "https://amnnepal.com/wp-content/uploads/2022/07/289451266_136545569002320_6074986624005120131_n.jpg",
  "https://www.trinity.edu.np/assets/backend/uploads/Gallery/ECA/2020/Intra-College%20Futsal%20Competition/New%20folder/IMG_0212.jpg",
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? bgImgs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastImg = currentIndex === bgImgs.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImg = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const imgInterval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(imgInterval);
  }, [currentIndex]);

  return (
    <div className='carousel'>
      <div className='prevArrow'>
        <MdOutlineKeyboardArrowLeft onClick={handlePrev} />
      </div>
      <div className='nextArrow'>
        <MdOutlineKeyboardArrowRight onClick={handleNext} />
      </div>

      <div
        className='carousel__img'
        style={{ backgroundImage: `url(${bgImgs[currentIndex]})` }}
      >
        <div className='overlay'></div>
      </div>

      <div className='carousel__indicators'>
        {bgImgs.map((bgImg, index) => (
          <GoDotFill
            key={index}
            className={`dot ${currentIndex === index ? "activeSlide" : ""}`}
            onClick={() => goToImg(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
