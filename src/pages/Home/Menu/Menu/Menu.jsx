 
import { Helmet } from 'react-helmet-async';
 
import Cover from '../../../../shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg';
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../../components/SectionTilte/SectionTitle';
import useMenu from '../../../../useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
 

const Menu = () => {
    const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
    return (
        <div >
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            {/* Main Cover */}

            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer">

            </SectionTitle>
            {/* offered menu items */}
           
            <MenuCategory
               items={offered}             
            ></MenuCategory>
            {/* desert menu items */}
            <MenuCategory
            items ={dessert}
            title={"Dessert"}
            coverImg={dessertImg}
            
            >

            </MenuCategory>

            {/* pizza category */}
            <MenuCategory
            items ={pizza}
            title={"Pizza"}
            coverImg={pizzaImg}
            
            >

            </MenuCategory>
            {/*salad category  */}
            <MenuCategory
            items ={salad}
            title={"Salad"}
            coverImg={saladImg}
            
            >

            </MenuCategory>
            {/* soup category */}
            <MenuCategory
            items ={soup}
            title={"Soup"}
            coverImg={soupImg}
            
            >

            </MenuCategory>
     
             
        </div>
    );
};

export default Menu;