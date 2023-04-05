import React, {useContext} from 'react';
import Grandchild from '../Grandchild';
import { InputContext } from '../../../App';

const Child: React.FC = () => {
    console.count("Child!");

    const {input, setInput} = useContext(InputContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
      }

    return (
        <>
            <h2>Child</h2>
            <input value={input} onChange={handleChange}/>
            <span>LOOK HERE! {input}</span>
            <Grandchild />
        </>
    )
}

export default Child;