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

const path = window.document.location.pathname

const promises = getData(routes, path)
let data

Promise.all(promises).then(responses => {
  // responses.forEach(r => {
  //   if (r) Object.assign(data, r)
  // })
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
