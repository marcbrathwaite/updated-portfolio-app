import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

// CSS
import './normalize.scss'

const App = ({ route }) => {
  const { routes } = route

  return <div>{renderRoutes(routes)}</div>
}

App.propTypes = {
  route: PropTypes.object.isRequired
}

export default App
