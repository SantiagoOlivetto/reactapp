import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navBarCont bg-primary">
      <div className='barFlex'>
        <div className='brandBox'>
          <strong className='brandFront'>Mos Eisley cantina</strong>
        </div>
        <div className='nav'>
          <ul>
          <li><a href='../src/index.html'>Home</a></li>
          <li><a href='../src/index.html'>Store</a></li>
          <li><a href='../src/index.html'>About</a></li>
          <li><a href='../src/index.html'>Contact</a></li>
          </ul>
        </div>
        <div className='cartFlex'>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}
export default NavBar