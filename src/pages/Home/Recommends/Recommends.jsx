import { useEffect, useState } from "react";
import RecommendItem from "../../../shared/RecommendItem/RecommendItem";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";

const Recommends = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecommends = data.filter(
          (item) => item.category === "pizza"
        );
        setItems(chefRecommends);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading="chef recommends"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid  grid-cols-4  px-10 gap-6 gap-x-6">
        {items.map((item) => (
          <RecommendItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Recommends;
