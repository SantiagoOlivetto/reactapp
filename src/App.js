import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Greetings from './components/Greetings'
import CartDrawer from './components/CartDrawer';
import {CartContextProvider} from "./components/context/CartContext";

function App() {
  return (
    <div className='mainCont'>
      <BrowserRouter>
        <NavBar />
          <CartContextProvider>
            <Routes>
              <Route path='/' element={<Greetings name="Traveler"/>} />
              <Route path= '/comics' element= {<ItemListContainer />} />
              <Route path="/comics/:id" element={<ItemListContainer/>} />
              <Route path="/comics/item/:id" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartDrawer />}/>
            </Routes>
          </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
