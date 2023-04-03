import React from 'react'
import { Character } from '../../__generated__/graphql'
import style from './Card.module.scss'

type CardProps = {
  character: Character
}

export const Card: React.FC<CardProps> = ({character}) => {
  return (
    <div className={style.card}>
        <p><span>name: </span><span>{character.name}</span></p>
        <p><span>status: </span><span>{character.status}</span></p>
        <p><span>species: </span><span>{character.species}</span></p>
        <p><span>type: </span><span>{character.type}</span></p>
        <p><span>gender: </span><span>{character.gender}</span></p>
        {/* <p><span>origin: </span><span>{character.origin}</span></p>
        <p><span>location: </span><span>{character.location}</span></p> */}
        <p><span>image: </span><span>{character.image}</span></p>
        {/* <p><span>episode: </span><span>{character.episode}</span></p> */}
    </div>
  );
}

export default Card;
