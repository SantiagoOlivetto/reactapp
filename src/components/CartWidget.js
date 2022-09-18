import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cartCont">
      <Link className='navLink' to={`/cart`}><ion-icon name="cart-outline"></ion-icon></Link>
    </div>
  )
}
export default CartWidget