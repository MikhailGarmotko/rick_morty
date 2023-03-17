import React from 'react';
import { useGetCharactersQuery } from '../../store/characterApi';
import { Character } from './Character/Character';
import styles from './Characters.module.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { setCharacters } from '../../store/characterSlices';
import { useEffect } from 'react';

export const Characters =({filterValue}:any):JSX.Element => {
    const characters = useAppSelector ( (state) => state.characterProfile.characters.filter ( (i:any) => i.name.toLowerCase().includes(filterValue.toLowerCase())));
    return (
       <>   {characters && characters
        .map ((i:any) => <Character  key = {i.id} props ={i} />) }
        </>
      
    )
       
}