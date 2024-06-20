
import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

// mount function to start

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el)
}

//If we are in development and in isolation,
// call mount immedieatly

if (process.env.NODE_ENV === 'development') {
  let devRoot = document.querySelector('#dashboard-dev-root')
  if (devRoot) {
      mount(devRoot)
  }
}

// we are running through container
// and we should export the mount function
export { mount}
