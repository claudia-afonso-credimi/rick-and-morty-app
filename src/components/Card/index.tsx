import React from 'react'
import { Character } from '../../__generated__/graphql'
import style from './Card.module.scss'

type CardProps = {
  character: Character
}

export const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <div className={style.card}>

      <div className={style.details}>
        <div className={style.imgContainer}>
          <img
            src={character.image || ''}
            alt={character.name || ''}
            className={style.img}
          />
        </div>
      </div>

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
          <span className={style.detailsTitle}>Gender: </span>
          <span className={style.detailsContent}>{character.gender}</span>
        </p>
      </div>

      <p className={`${style.detailsTitle} ${style.border}`}>Origin </p>
      <div className={style.details}>
        {character.origin &&
          <>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Name: </p>
              <p className={style.detailsContent}>{character.origin.name}</p>
            </div>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Dimension: </p>
              <p className={style.detailsContent}>{character.origin.dimension}</p>
            </div>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Type: </p>
              <p className={style.detailsContent}>{character.origin.type}</p>
            </div>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Name: </p>
              <p className={style.detailsContent}>{character.origin.residents.length}</p>
            </div>
          </>
        }
      </div>

      <p className={`${style.detailsTitle} ${style.border}`}>Location </p>
      <div className={style.details}>
        {character.location &&
          <>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Name: </p>
              <p className={style.detailsContent}>{character.location.name}</p>
            </div>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Dimension: </p>
              <p className={style.detailsContent}>{character.location.dimension}</p>
            </div>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Type: </p>
              <p className={style.detailsContent}>{character.location.type}</p>
            </div>
            <div className={`${style.detailsText} ${style.subDetails}`}>
              <p className={style.detailsTitle}>Residents: </p>
              <p className={style.detailsContent}>{character.location.residents.length}</p>
            </div>
          </>
        }
      </div>
        {/* <p><span>episode: </span><span>{character.episode}</span></p> */}
    </div>
  );
}

export default Card;
