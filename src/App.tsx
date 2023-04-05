import './App.css';
import CatList from './components/CatList';
import DogList from './components/DogList';
import { withSearch } from './components/withSearch';

function App() {
  const DogListWithSearch = withSearch(DogList);
  const CatListWithSearch = withSearch(CatList);

  return (
    <div className='app'>
      <DogListWithSearch />
      <CatListWithSearch />
    </div>
  );
}

export default App;
