import { matchRoutes } from 'react-router-config'

export default (routes, path) => {
  return matchRoutes(routes, path)
    .map(({ route }) => {
      const { loadData } = route
      // Call loadData function on routes that have it, thus returning an array of promises
      return loadData ? loadData() : null
    })
    .map(promise => {
      // wrap each promise in a promise, which resolve regardless of if the inner promise fails
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })
}
