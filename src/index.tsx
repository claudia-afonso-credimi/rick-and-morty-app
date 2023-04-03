import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import App from './pages/App'

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
