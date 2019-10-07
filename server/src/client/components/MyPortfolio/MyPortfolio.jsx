import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const MyPortfolio = ({ data }) => {
  const renderHead = () => {
    return (
      <Helmet>
        <title>Marc Brathwaite | Developer</title>
      </Helmet>
    )
  }

  console.log(data)

  return (
    <>
      {renderHead()}
      This is a test
    </>
  )
}

MyPortfolio.propTypes = {
  data: PropTypes.object.isRequired
}

export default MyPortfolio
