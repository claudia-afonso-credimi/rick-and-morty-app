import React from 'react'
import { Character } from '../../__generated__/graphql'
import style from './Card.module.scss'

type CardProps = {
  character: Character
}

export const Card: React.FC<CardProps> = ({ character }) => {
  console.log(character)
  return (
    <div className={style.card}>
      <div className={style.details}>
        <p className={style.detailsText}>
          <span className={style.detailsTitle}>Name: </span>
          <span className={style.detailsContent}>{character.name}</span>
        </p>
        <p className={style.detailsText}>
          <span className={style.detailsTitle}>Status: </span>
          <span className={style.detailsContent}>{character.status}</span>
        </p>
        <p className={style.detailsText}>
          <span className={style.detailsTitle}>Species: </span>
          <span className={style.detailsContent}>{character.species}</span>
        </p>
        <p className={style.detailsText}>
          <span className={style.detailsTitle}>Type: </span>
          <span className={style.detailsContent}>{character.type}</span>
        </p>
        <p className={style.detailsText}>
          <span className={style.detailsTitle}>Gender: </span>
          <span className={style.detailsContent}>{character.gender}</span>
        </p>
        {character.origin &&
          <>
            <p className={style.detailsText}>
              <span className={style.detailsTitle}>Origin: </span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Name: </span>
              <span className={style.detailsContent}>{character.origin.name}</span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Dimension: </span>
              <span className={style.detailsContent}>{character.origin.dimension}</span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Type: </span>
              <span className={style.detailsContent}>{character.origin.type}</span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Name: </span>
              <span className={style.detailsContent}>{character.origin.residents.length}</span>
            </p>
          </>
        }
        {character.location &&
          <>
            <p className={style.detailsText}>
              <span className={style.detailsTitle}>Location: </span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Name: </span>
              <span className={style.detailsContent}>{character.location.name}</span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Dimension: </span>
              <span className={style.detailsContent}>{character.location.dimension}</span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Type: </span>
              <span className={style.detailsContent}>{character.location.type}</span>
            </p>
            <p className={`${style.detailsText} ${style.subDetails}`}>
              <span className={style.detailsTitle}>Residents: </span>
              <span className={style.detailsContent}>{character.location.residents.length}</span>
            </p>
          </>
        }
        {/* <p><span>episode: </span><span>{character.episode}</span></p> */}
      </div>
      <div className={style.imgContainer}>
        <img
          src={character.image || ''}
          alt={character.name || ''}
          className={style.img}
        />
      </div>
    </div>
  );
}

export default Card;
