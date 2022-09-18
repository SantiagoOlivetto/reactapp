import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import comicsJson from "../comics.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      console.log(data)
      if (data) {
        setItem(data);
      }
    });
  }, []);

  const getItem = (id) => {
    return new Promise((resolve) => {
      console.log(comicsJson.data.results);
      setTimeout(() => {
        resolve(comicsJson.data.results.find((comic) => comic.id == id));
      }, 2000);
    });
  };

  return <ItemDetail item={item}/>;
};
export default ItemDetailContainer;