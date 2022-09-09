import CartWidget from './CartWidget'
import './NavBar.css'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navBarCont bg-primary">
      <div className='barFlex'>
        <div className='brandBox'>
          <strong className='brandFront'>Sketchy Wookiee</strong>
        </div>
        <div className='nav'>
          <ul>
          <li><a href='../src/index.html'>Home</a></li>
          <li><Link to={`/comics`}>Comics</Link></li>
          <li><a href='../src/index.html'>About</a></li>
          <li><a href='../src/index.html'>Contact</a></li>
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