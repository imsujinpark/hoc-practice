import React from 'react';
import { animalData } from '../../types/animal';
import './index.css';

interface AnimalCardProps {
    animalData: animalData
}

const AnimalCard: React.FC<AnimalCardProps> = ({animalData}) => {
    return (
        <div className='animal-card'>
            <h2>{animalData.name}</h2>
            <div className='body'>
                <span>Age: {animalData.age}</span>
                <span>Breed: {animalData.breed}</span>
                <span>Color: {animalData.color}</span>
                <span>Personality: {animalData.personality}</span>
            </div>
        </div>
    )
}

export default React.memo(AnimalCard);