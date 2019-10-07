import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// Contexts
import { ContentContextProvider } from './contexts/ContentContext'

// Routes
import routes from './components/routes'

ReactDOM.hydrate(
  <ContentContextProvider>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </ContentContextProvider>,
  document.getElementById('root')
)
