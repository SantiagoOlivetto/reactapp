import Counter from "./Counter";
import '../spinner.css'

const ItemDetail = ({ item: { title, prices, images, creators, stock } }) => {

  const onDefindedRender = () => {
    return prices ? `Price: $ ${prices[1].price}` : <div className="lds-dual-ring"></div>
  }

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
          <h3 className="m-5">{onDefindedRender()}</h3> 
          <Counter stock={stock} initial="1" />
          <p>{stock > 0 ? `Stock: ${stock} unidades` : "Sin stock :("}</p>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
