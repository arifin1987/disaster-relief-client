import SectionTitle from "@/components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

interface reviewType {
  _id: string;
  review: string;
  donor_name: string;
  donor_details: string;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-4">
      <SectionTitle subHeading="What our donors say" heading="Testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review: reviewType) => (
          <SwiperSlide key={review._id}>
            <div>
              <h1 className="text-2xl text-red-500">{review.donor_name}</h1>

              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
