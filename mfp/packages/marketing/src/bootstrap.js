import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import { createMemoryHistory, createBrowserHistory } from 'history';

// mount function to start

const mount = (el, { onNavigate, defaultHistory}) => {
    //const root = ReactDOM.createRoot(el)

    const history = defaultHistory || createMemoryHistory();
    if (onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(
        <App history={history} />,
        el
    )
    return {
        onParentNavigate({ pathname: nextPathName}) {
            const { pathname } = history.location;
            if (pathname !== nextPathName) {
                history.push(nextPathName)
            }
        }
    }
}


//If we are in development and in isolation,
// call mount immedieatly

if (process.env.NODE_ENV === 'development') {
  let devRoot = document.querySelector('#marketing-dev-root')
  if (devRoot) {
      mount(devRoot, {defaultHistory: createBrowserHistory()})
  }
}

// we are running through container
// and we should export the mount function
export { mount}
