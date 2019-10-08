import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import Header from './Header'

const MyPortfolio = ({ data }) => {
  const renderHead = () => {
    return (
      <Helmet>
        <title>Marc Brathwaite | Developer</title>
      </Helmet>
    )
  }

  const { headerSection, sections, footerSection } = data

  return (
    <>
      {renderHead()}
      {headerSection && <Header content={headerSection} />}
    </>
  )
}

MyPortfolio.propTypes = {
  data: PropTypes.object.isRequired
}

export default MyPortfolio
