import React, { useContext } from 'react'
import PropTypes from 'prop-types'

// Components
import MyPortfolio from './MyPortfolio'

// Context components
import ContentContext from '../../contexts/ContentContext'

// Constants
import { statusMessages } from '../../constants'
const { UNINIT, PENDING, SUCCESS, FAILURE } = statusMessages

const MyPortfolioContainer = ({ location }) => {
  const content = useContext(ContentContext)
  const { status, data } = content

  const isLoading = status === UNINIT || status === PENDING
  const isSuccess = status === SUCCESS
  const isFailure = status === FAILURE

  // Get hash from the URL
  const { hash } = location
  const urlHash = hash.slice(1)

  return (
    <>
      {isSuccess && <MyPortfolio data={data} urlHash={urlHash} />}
      {isLoading && <div>Loading...</div>}
      {isFailure && <div>Failure...</div>}
    </>
  )
}

MyPortfolioContainer.propTypes = {
  location: PropTypes.object.isRequired
}

export default MyPortfolioContainer
