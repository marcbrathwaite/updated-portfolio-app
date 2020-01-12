import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// Contexts
import StaticContext from './contexts/StaticContext'

// Routes
import routes from './routes'

//Helpers
import getData from '../helpers/getData'
// get path requested by the user
const path = window.document.location.pathname
// Array of promises based on the path
const promises = getData(routes, path)
let data
// Add the results of promises to data object, to be passed into Context provider
Promise.all(promises).then(responses => {
  data = responses.reduce((acc, curr) => {
    return { ...acc, ...curr }
  }, {})
})

ReactDOM.hydrate(
  <StaticContext.Provider value={data}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </StaticContext.Provider>,
  document.getElementById('root')
)
