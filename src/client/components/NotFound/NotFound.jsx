import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../Common/Heading'

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <Heading level="h1" invert>
      Oops, page not found
    </Heading>
  )
}

NotFound.defaultProps = {
  staticContext: {}
}

NotFound.propTypes = {
  staticContext: PropTypes.object
}

export default {
  component: NotFound
}
