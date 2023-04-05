import { useState, createContext } from 'react';
import './App.css';
import CatList from './components/CatList';
import DogList from './components/DogList';
import GrandParent from './components/TheseAreForPractisingHooks/Grandparent';
import { withSearch } from './components/withSearch';

export const InputContext = createContext({
  input: "",
  setInput: (str: string) => {}
});

function App() {
  const [input, setInputValue] = useState("Sujin Park");

  const DogListWithSearch = withSearch(DogList);
  const CatListWithSearch = withSearch(CatList);

  const setInput = (value: string) => {
    setInputValue(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className='app'>
      <div className='hoc-practice'>
        <DogListWithSearch />
        <CatListWithSearch />
      </div>
      <div className='context-practice'>
        <input value={input} onChange={handleChange}/>
        <InputContext.Provider value={{input, setInput}}>
          <GrandParent />
        </InputContext.Provider>
      </div>
    </div>
  );
}

export default App;
