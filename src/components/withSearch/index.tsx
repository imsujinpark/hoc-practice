import React, { ChangeEvent, useState } from 'react';
import { IWithSearch } from '../../types/animal';
import './index.css';

export const withSearch = (WrappedComponent: React.NamedExoticComponent<IWithSearch>) => {
    const WithSearch: React.FC = () => {
        const [searchTerm, setSearchTerm] = useState("");

        const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
        }

        return (
            <div className='with-search'>  
                <input value={searchTerm} onChange={handleSearch}/>
                <WrappedComponent searchTerm={searchTerm} />
            </div>
        )
    }
    return WithSearch;
}