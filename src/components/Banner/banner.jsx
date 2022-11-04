import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// Import Swiper styles
import "swiper/css";
SwiperCore.use([Autoplay, Pagination, Navigation]);
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
      <div className="py-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={4}
          loop={true}
          autoplay={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/Vl98Isz.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/BXbX7n5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/nRjuhRj.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/540EKkz.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/kdfaV6N.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/4aFcG2Q.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/R7iDJfj.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="transform transition duration-500 hover:scale-110">
            <img src="https://i.imgur.com/540EKkz.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
