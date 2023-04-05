import React, {useContext} from 'react';
import Grandchild from '../Grandchild';
import { InputContext } from '../../../App';

const Child: React.FC = () => {
    console.count("Child!");

    const {input, setInput} = useContext(InputContext);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName -;
    // }

    return (
        <>
            <h2>Child</h2>
            <span>name</span>
            <input value={input} />
            <Grandchild />
        </>
    )
}

export default Child;