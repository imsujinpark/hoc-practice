import React from 'react';

const Grandchild: React.FC = () => {
    console.count("Grandchild!");
    return (
        <h2>Grandchild</h2>
    )
}

export default React.memo(Grandchild);