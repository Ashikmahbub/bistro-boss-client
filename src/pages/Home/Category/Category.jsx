import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";

const Catagory = () => {
  return (
   <section className="">
    <SectionTitle
     subHeading ={"From 11.00 am to 10.00 pm"}
     heading = {"Order Online"}
    >
     
    </SectionTitle>
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24 py-10"
    
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desert</h3>
      </SwiperSlide>
      
    </Swiper>
       
   </section>
  );
};

export default Catagory;
