import Slider from "react-slick";

const Banner = () => {
  const settings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const huydev = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container max-w-4xl mx-auto">
      <Slider {...settings}>
        <div>
          <img src="https://i.imgur.com/4ElsZpK.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/Um6EQdj.jpg" alt="" />
        </div>
      </Slider>
      <div className="pt-3">
        <p>
          <h2 className="text-center font-upper font-bold text-3xl">
            CHỨC NĂNG
          </h2>
        </p>
        <div className="line-bg"></div>
      </div>
      <Slider {...huydev}>
        <div className="transform transition duration-500 hover:scale-110 border-0">
          <img src="https://i.imgur.com/Vl98Isz.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/BXbX7n5.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/nRjuhRj.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/540EKkz.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/kdfaV6N.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/4aFcG2Q.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/R7iDJfj.png" alt="" />
        </div>
        <div className="transform transition duration-500 hover:scale-110">
          <img src="https://i.imgur.com/540EKkz.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
