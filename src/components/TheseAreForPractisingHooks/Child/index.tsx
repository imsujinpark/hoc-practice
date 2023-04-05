import React, {useContext} from 'react';
import Grandchild from '../Grandchild';
import { InputContext } from '../../../App';

const Child: React.FC = () => {
    console.count("Child!");

    const [name, setName] = useContext(InputContext);

    return (
        <>
            <h2>Child</h2>
            <Grandchild />
        </>
    )
}

export default Child;