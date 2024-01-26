import SectionTitle from "../../../components/SectionTilte/SectionTitle";
import image1 from "../../../assets/home/featured.jpg";
import './Featured.css';
 

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10" >
      <SectionTitle
        heading="From our menu"
        subHeading="Check It Out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12  px-36">
        <div>
          <img src={image1} alt="" />
        </div>
        <div className="md:ml-10">
            <p>AUG 20, 2029</p>
          <p className="uppercase">where can I get it?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            soluta voluptas quasi cupiditate temporibus veritatis. Doloribus,
            ipsum quos nesciunt ipsam veniam ut, aliquam tenetur excepturi
            debitis natus deserunt vitae qui?
          </p>
          <button className="btn btn-outline border-0 border-b-4">Read More</button>
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
