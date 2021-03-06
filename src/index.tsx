import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { cache } from './cache'

if (process.env.NODE_ENV === 'development') {
  const {
    worker,
  } = require('./__api_mocks__/browser') as typeof import('./__api_mocks__/browser')
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  worker.start()
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:8080/',
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
