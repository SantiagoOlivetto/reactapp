import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import comicsjson from "../comics.json"


const ItemContainer = () => {
  const [comics, setComics] = useState([]);

    const getComics = (data, time) => {
        new Promise((resolve, reject) => {
            if (data) {
                resolve(data)
            }
            else {
                reject("Error")
            }
        })
    }


  useEffect( () => {
    getComics(comicsjson)
    .then((res) => setComics(res))
    .catch((rej) => console.log(`${rej} Error`))
    /* fetch(comicsjson)
    .then((res) => setComics(res))
    .catch((rej) => console.log (`${rej} Error`)) */

  }, [])

    console.log(comics)

    return <ItemList comics={comics} />
}
export default ItemContainer;
