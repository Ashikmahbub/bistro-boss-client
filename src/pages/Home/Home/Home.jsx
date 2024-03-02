import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

import PopularMenu from "../PopularMenu/PopularMenu";
import RecommendItem from "../../../shared/RecommendItem/RecommendItem";
import Recommends from "../Recommends/Recommends";
import TestiMonials from "../TestiMonials/TestiMonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Recommends></Recommends>
      <RecommendItem></RecommendItem>
      <Featured></Featured>
      <TestiMonials></TestiMonials>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      
    </div>
  );
};

export default Home;
