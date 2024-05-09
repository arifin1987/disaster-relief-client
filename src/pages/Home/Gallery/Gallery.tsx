import img1 from "../../../assets/img/gallery/g1.jpg";
import img2 from "../../../assets/img/gallery/g2.jpg";
import img3 from "../../../assets/img/gallery/g3.jpg";
import img4 from "../../../assets/img/gallery/g4.jpg";
import img5 from "../../../assets/img/gallery/g5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
const Gallery = () => {
  return (
    <div>
      <SectionTitle subHeading="our Donation activities" heading="Gallery" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[300px]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
