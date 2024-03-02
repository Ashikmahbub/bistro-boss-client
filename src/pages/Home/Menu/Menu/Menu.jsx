 
import { Helmet } from 'react-helmet-async';
 
import Cover from '../../../../shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg';
import SectionTitle from '../../../../components/SectionTilte/SectionTitle';
import useMenu from '../../../../useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
 

const Menu = () => {
    const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "desert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
    return (
        <div >
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory
               items={offered}             
            ></MenuCategory>
           
     
             
        </div>
    );
};

export default Menu;