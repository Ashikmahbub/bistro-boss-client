import Cover from "../../../../shared/Cover/Cover";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({items,menuImg,title}) => {
   
  return (
    <div>
         <Cover img={menuImg} title={title}></Cover>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem
          key={item._id} 
          item={item}
          
          ></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
