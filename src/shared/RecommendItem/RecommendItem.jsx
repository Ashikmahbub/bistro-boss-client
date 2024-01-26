 

const RecommendItem = ({item}) => {
    const {recipe,name,image} = item || {};
    
  return (
    <div>
      
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary border-none hover:bg-yellow-600 bg-slate-300 text-yellow-700">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendItem;
