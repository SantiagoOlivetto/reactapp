import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const API = "https://swapi.dev/api/films/";

const ItemContainer = () => {
  const [films, setFilms] = useState();

  /* const getFilms = (data, time) => {
        if (data) {
            setTimeout(() => {
                fetch(data)
                .then((res) => res.json())
                .then((resJson) => setFilms(resJson.results))
                .catch((err) => console.log(`${err}: There was a problem`))
            }, time)
            console.log(data,time)
        }   
    } */

    useEffect(() => {
        setTimeout(() => {
            
            fetch(API)
            .then ((res) => res.json())
            .then ((resJson => setFilms(resJson.results)))
            .catch((err) => console.log(`${err}: There was a problem`)) 

        }, 2000)
    }, [])

    return <ItemList films={films} />
}
export default ItemContainer;
