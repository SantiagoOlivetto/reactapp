import CartWidget from './CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navBarCont bg-primary">
      <div className='barFlex'>
        <div className='brandBox'>
          <strong className='brandFront'>Sketchy Wookiee</strong>
        </div>
        <div className='nav'>
          <ul>
          <li><Link className='navLink' to={`/`}>Home</Link></li>
          <li><Link className='navLink' to={`/comics`}>Comics</Link></li>
          <li><Link className='navLink' to={`/`}>About</Link></li>
          <li><Link className='navLink' to={`/`}>Contact</Link></li>
          </ul>
          <div className='cartFlex'>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar