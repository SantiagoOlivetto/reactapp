import ItemCard from './ItemCard'
import '../spinner.css'

const ItemList = (comics) => {
  
  const c = comics.comics;
  console.log(c);
  
  return (
    <div className='pb-8'>
      <div className='grid grid-flow-col gap-x-8 overflow-x-auto overscroll-x-contain snap-x mt-20 h-fit'>
        {c.length ? c.map((comic) => <ItemCard  key={comic.id} {...comic}/>): <div className="lds-dual-ring"></div>} 
      </div>
    </div>
  )
}
export default ItemList