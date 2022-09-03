import ItemCard from './ItemCard'
import '../spinner.css'

const ItemList = (films) => {
  const f = films.films

  return (
    <div className=''>
      <div className='grid grid-flow-col gap-x-8 overflow-x-auto overscroll-x-contain snap-x mt-20 mx-3'>
        {f ? f.map((film) => <ItemCard  key={f.indexOf(film)} {...film}/>): <div className="lds-dual-ring"></div>}
      </div>
    </div>
  )
}
export default ItemList