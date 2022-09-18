import Counter from "./Counter";
import '../spinner.css';
import {useState, useEffect} from "react";



const ItemDetail = ({ item }) => {
  /* console.log(item); */


  const [stock, setstock] = useState(10)

 
  

  const onDefindedRender = () => { // This ternary prevent crash at the moment of delay of loading the prices
    return item.prices ? `Price: $ ${item.prices[1].price}` : <div className="lds-dual-ring"></div>
  }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row glass">
        <img
          src={item.images ? `${item.images[0].path}.${item.images[0].extension}` : ""}
          className="max-w-sm m-3 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl m-4 font-bold">{item.title}</h1>
          {
            item.creators ? 
            item.creators.items.map(creator => (
              <p className="py-2">
                <span className="m-5">{creator.role}:</span>
               {creator.name}
              </p>
            )) : ""
          } 
          <h3 className="m-5">{onDefindedRender()}</h3> 
          <Counter stock={stock} initial="1" comic={item} />
          <p className="mx-5">{stock > 0 ? `Stock: ${stock}` : "out of stock :("}</p>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
