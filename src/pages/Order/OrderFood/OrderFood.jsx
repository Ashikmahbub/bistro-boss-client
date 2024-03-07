import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../useMenu";
import { useParams } from 'react-router-dom';
 

import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {
  const categories = ["pizza", "salad", "soup", "dessert", "drinks","offer"];
  const { category } =useParams();
  console.log(category);
  const intialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(intialIndex);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offer = menu.filter((item) => item.category === "offered");
   

  return (
    <div className="text-center">
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderImg} title={"ORDER YOUR MEAL"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(tabIndex)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offer</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offer} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
