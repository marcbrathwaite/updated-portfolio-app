import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

// CSS
import './normalize.scss'

const App = ({ route }) => {
  const { routes } = route
  // render subRoutes i.e. MyPortfolio and NotFound
  return <div>{renderRoutes(routes)}</div>
}

App.propTypes = {
  route: PropTypes.object.isRequired
}

export default App
