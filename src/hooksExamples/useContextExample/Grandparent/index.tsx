import React from 'react';
import Parent from '../Parent';

const GrandParent: React.FC = () => {
    console.count("Grandparent!");
    return (
        <>
            <h2>Grandparent</h2>
            <Parent />
        </>
    )
}

export default React.memo(GrandParent);