import './App.css';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='mainCont'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path= '/comics' element= {<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
