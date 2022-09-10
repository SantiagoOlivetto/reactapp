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
          <li><Link to='../src/index.html'>Home</Link></li>
          <li><Link to={`/comics`}>Comics</Link></li>
          <li><Link to='../src/index.html'>About</Link></li>
          <li><Link to='../src/index.html'>Contact</Link></li>
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