import { Link } from "react-router-dom";
import Cover from "../../../../shared/Cover/Cover";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-8 pb-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 text-orange-400 hover:bg-black hover:text-orange-400 border-b-4 bg-slate-100">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
