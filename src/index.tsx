import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

// if (process.env.NODE_ENV === 'development') {
//   const {
//     worker,
//   } = require('./__api_mocks__/browser') as typeof import('./__api_mocks__/browser')
//   // eslint-disable-next-line @typescript-eslint/no-floating-promises
//   worker.start()
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
