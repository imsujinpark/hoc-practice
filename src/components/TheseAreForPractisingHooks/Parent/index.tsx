import React from 'react';
import Child from '../Child';

const Parent: React.FC = () => {
    console.count("Parent!");
    return (
        <>
            <h2>Parent</h2>
            <Child />
        </>
    )
}

export default Parent;