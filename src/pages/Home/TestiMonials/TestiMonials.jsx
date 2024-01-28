import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

const TestiMonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res =>res.json())
        .then(data =>{
            setReviews(data);
        })

    })
  return (
    <section>
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {
            reviews.map(review =><SwiperSlide
            key={review._id}

            
            >
                <div className="m-24">
                    <p>
                        {review.details}
                    </p>
                    <h3 className="2xl text-orange-400">
                        {review.name}
                    </h3>
                </div>

            </SwiperSlide>)
         }
      </Swiper>
    </section>
  );
};

export default TestiMonials;
