// import Slider from "react-slick";

// const Sliders = () => {
//   return (
//     <div className="container max-w-5xl mx-auto p-2">
//       {/* <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         slidesPerGroup={4}
//         loop={true}
//         autoplay={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         breakpoints={{
//             "@0.00": {
//               slidesPerView: 2,
//               spaceBetween: 10,
//             },
//             "@0.75": {
//               slidesPerView: 2,
//               spaceBetween: 10,
//             },
//             "@1.00": {
//               slidesPerView: 3,
//               spaceBetween: 20,
//             },
//             "@1.50": {
//               slidesPerView: 4,
//               spaceBetween: 10,
//             },
//           }}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src="https://i.imgur.com/f6qwfQX.png" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.imgur.com/UfV7Q99.png" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.imgur.com/bSTMFLj.png" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.imgur.com/8nZo0Zf.png" alt="" /></SwiperSlide>
//       </Swiper> */}
      
//     </div>
//   );
// };

// export default Sliders;

import Slider from "react-slick";

const Sliders = () => {
  const banner = {
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
    <div className="container max-w-5xl mx-auto p-2">
        <Slider {...banner}>
        <div>
        <img src="https://i.imgur.com/f6qwfQX.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/UfV7Q99.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/bSTMFLj.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/8nZo0Zf.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/f6qwfQX.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/UfV7Q99.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/bSTMFLj.png" alt="" />
        </div>
        <div>
        <img src="https://i.imgur.com/8nZo0Zf.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;

