import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const QUERY_CHARACTERS = gql`
  query ($page: Int!) {
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

// ● Image
// ● Character information (name, species, etc).
// ● Origin and location information (name, dimension, amount of residents, etc). ● Name of the chapters the character is featured on.

function App() {
  const [ currentPage, setCurrentPage ] = useState(1)
  const { data, loading, error } = useQuery(QUERY_CHARACTERS, {
    variables: {
      page: currentPage
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        HEADER
      </header>
      <main>
        {data && data.characters.results.map((el: any, index: any) => {
          return <div key={index}>{el.name}</div>
        })}
      </main>
    </div>
  );
}

export default App;
