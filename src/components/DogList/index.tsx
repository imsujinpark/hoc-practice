import React from "react";
import AnimalCard from "../AnimalCard";
import { dummyDogs } from "../../data/dummyDogs";
import { IWithSearch } from "../../types/animal";

const filterDogs = (searchTerm: string) => {
    searchTerm = searchTerm.toUpperCase();
    return dummyDogs.filter(dog => {
        let dogData = `${dog.name} ${dog.breed} ${dog.color} ${dog.personality} ${dog.age}`.toUpperCase();
        return dogData.indexOf(searchTerm) >= 0;
    })
}

const DogList: React.FC<IWithSearch> = ({ searchTerm }) => {

    const filteredDogs = filterDogs(searchTerm);

    return (
        <div>
            <ul>
                {!!filteredDogs && filteredDogs.map(dogData => {
                    return (
                        <li key={dogData.id}>
                            <AnimalCard animalData={dogData} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default React.memo(DogList);