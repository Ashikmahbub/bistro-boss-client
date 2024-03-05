 

const RecommendItem = ({ item }) => {
  const { recipe, name, image } = item || {};

  return (
    
      <div className="card w-70 bg-base-100 shadow-xl overflow-hidden">
        <figure>
          <img src={image} alt={name} className="rounded transition-transform duration-700 ease-in-out transform hover:scale-150 w-100% h-full object-cover" />
          
        </figure>

       

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary border-none hover:bg-black bg-red-600 text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default RecommendItem;
