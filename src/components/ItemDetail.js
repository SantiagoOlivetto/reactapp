import Counter from "./Counter";

const ItemDetail = ({ item: { title, price, images, creators, stock } }) => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row glass">
        <img
          src={images ? `${images[0].path}.${images[0].extension}` : ""}
          className="max-w-sm m-3 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl m-4 font-bold">{title}</h1>
          {
            creators ? 
            creators.items.map(creator => (
              <p className="py-2">
                <span className="m-5">{creator.role}:</span>
               {creator.name}
              </p>
            )) : ""
          }
          <h3>{price}</h3> 
          {/* <h3 className="m-5">Price: ${prices[1].price}</h3> */}
          <Counter stock={stock} initial="1" />
          <p>{stock > 0 ? `Stock: ${stock} unidades` : "Sin stock :("}</p>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
