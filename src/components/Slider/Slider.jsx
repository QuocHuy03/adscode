// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// Import Swiper styles
import "swiper/css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <div className="container max-w-5xl mx-auto px-2">
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
        <SwiperSlide><img src="https://i.imgur.com/f6qwfQX.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/UfV7Q99.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/bSTMFLj.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/8nZo0Zf.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
