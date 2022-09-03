import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Counter from './components/Counter';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className='mainCont'>
      <NavBar />
      <ItemListContainer />
      <div className='flex place-content-center'>
        <Counter />
      </div>
      <div>
      <ItemContainer />
      </div>
    </div>
  );
}

export default App;
