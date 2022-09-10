import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className='mainCont'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path= '/comics' element= {<ItemListContainer />} />
          <Route path="/comics/:id" element={<ItemListContainer/>} />
          {/* <Route path="/comics/item/:slug" element={<ItemDetailContainer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
