import { useState, createContext } from 'react';
import './App.css';
import CatList from './hocExamples/CatList';
import DogList from './hocExamples/DogList';
import { withSearch } from './hocExamples/withSearch';
import GrandParent from './hooksExamples/useContextExample/Grandparent';

export const InputContext = createContext({
  input: "",
  setInput: (str: string) => {}
});

function App() {
  const [input, setInputValue] = useState("");

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
