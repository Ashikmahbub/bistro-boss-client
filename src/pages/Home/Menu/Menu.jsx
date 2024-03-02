 
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div >
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
             
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;