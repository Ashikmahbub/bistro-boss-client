import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const FoodCard = ({item}) => {
    const {name,image,price,recipe} =item;
    const {user} = useContext(AuthContext);
    const handleAddToCart = food =>{
      

      console.log(food,user);
      
    }
  return (
    <div className="text-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="food"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border-0 text-orange-400 hover:bg-black hover:text-orange-400 border-b-4 bg-slate-100">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
