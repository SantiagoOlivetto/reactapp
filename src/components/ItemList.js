import ItemCard from './ItemCard'
import '../spinner.css'

const ItemList = (comics) => {
  /* const f = comics */
  return (
    <div className='pb-8'>
      <div className='grid grid-flow-col gap-x-8 overflow-x-auto overscroll-x-contain snap-x mt-20'>
        {comics ? comics.map((comic) => <ItemCard  key={comic.indexOf(comic)} {...comic}/>): <div className="lds-dual-ring"></div>}
      </div>
    </div>
  )
}
export default ItemList