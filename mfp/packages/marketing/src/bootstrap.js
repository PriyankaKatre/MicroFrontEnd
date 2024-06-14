import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'

// mount function to start

const mount = (el) => {
  //const root = ReactDOM.createRoot(el)
  ReactDOM.render(
    <App />,
    el
  )
}


//If we are in development and in isolation,
// call mount immedieatly

if (process.env.NODE_ENV === 'development') {
  let devRoot = document.querySelector('#marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// we are running through container
// and we should export the mount function
export { mount}
