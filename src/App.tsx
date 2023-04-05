import { useState, createContext } from 'react';
import './App.css';
import CatList from './components/CatList';
import DogList from './components/DogList';
import GrandParent from './components/TheseAreForPractisingHooks/Grandparent';
import { withSearch } from './components/withSearch';

export const InputContext = createContext<{name: string, setName: React.Dispatch<React.SetStateAction<string>>}>({});

function App() {
  const [name, setName] = useState("Sujin Park");

  const DogListWithSearch = withSearch(DogList);
  const CatListWithSearch = withSearch(CatList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div className='app'>
      <div className='hoc-practice'>
        <DogListWithSearch />
        <CatListWithSearch />
      </div>
      <div className='context-practice'>
        <input value={name} onChange={handleChange}/>
        <InputContext.Provider value={{name, setName}}>
          <GrandParent />
        </InputContext.Provider>
      </div>
    </div>
  );
}

export default App;
