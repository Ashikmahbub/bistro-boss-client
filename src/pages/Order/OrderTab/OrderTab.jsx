 

 

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3">
        {
            
           items.map(item => 
            
           
           key={item._id}
           item={item}
        
         }
        </div>
    );
};

export default OrderTab;