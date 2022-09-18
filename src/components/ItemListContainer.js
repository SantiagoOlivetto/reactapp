import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import comicsJson from "../comics.json"


const ItemContainer = () => {
  const [comics, setComics] = useState([]);

    const getComics = (data) => {
        return new Promise((resolve, reject) => {
            if (data) {
                resolve(data)
            }
            else {
                reject("Error")
            }
        })
    }

  useEffect( () => {
    setTimeout(() => {
      getComics(comicsJson.data.results)
        .then((res) => setComics(res))
        .catch((rej) => console.log(`${rej} Error`))
    },2000)
  }, []) 

    return <ItemList comics={comics} />
}
export default ItemContainer;
