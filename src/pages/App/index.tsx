import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import logo from '../../images/logo.png'
import { Card } from '../../components/Card'
import { Query_CharactersQuery } from '../../__generated__/graphql'
import style from './App.module.scss'

const QUERY_CHARACTERS = gql`
  query query_characters ($page: Int!) {
    characters(page: $page) {
      results {
        name
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
          residents {
            id
          }
        }
        location {
          name
          dimension
          type
          residents {
            id
          }
        }
        image
        episode {
          name
        }
      }
    }
  }
`;

const App: React.FC = () => {
  const [ currentPage, setCurrentPage ] = useState(1)
  const { data, loading, error } = useQuery<Query_CharactersQuery>(QUERY_CHARACTERS, {
    variables: {
      page: currentPage
    }
  });

  return (
    <div className={style.app}>
      <header className={style.header}>
        <img src={logo} className={style.logoImg}/>
      </header>
      <main className={style.main}>
        <ul className={style.cardsGrid}>
          {data?.characters?.results?.map((el: any, index: number) => {
            return <li key={index}><Card character={el } /></li>
          })}
        </ul>
        <button onClick={() => setCurrentPage(currentPage !== 0 ? currentPage - 1 : currentPage)}>prev</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
      </main>
    </div>
  );
}

export default App;
