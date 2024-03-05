import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../useMenu";
 
import OrderTab from "../OrderTab/OrderTab";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu]=useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Cover img={orderImg} title={"ORDER YOUR MEAL"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
         <OrderTab items ={pizza}>

         </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
