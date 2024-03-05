import Cover from "../../../../shared/Cover/Cover";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({items,coverImg,title}) => {
   
  return (
    <div className="pt-8 pb-8">
      { title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
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
