import React from "react";
import AnimalCard from "../AnimalCard";
import { dummyCats } from "../../data/dummyCats";
import { IWithSearch } from "../../types/animal";

const filterCats = (searchTerm: string) => {
    searchTerm = searchTerm.toUpperCase();
    return dummyCats.filter(cat => {
        let catData = `${cat.name} ${cat.breed} ${cat.color} ${cat.personality} ${cat.age}`.toUpperCase();
        return catData.indexOf(searchTerm) >= 0;
    })
}

const CatList: React.FC<IWithSearch> = ({ searchTerm }) => {

    const filteredCats = filterCats(searchTerm);

    return (
        <div>
            <ul>
                {!!filteredCats && filteredCats.map(catData => {
                    return (
                        <li key={catData.id}>
                            <AnimalCard animalData={catData} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default React.memo(CatList);