import React, { useContext } from 'react'

// Components
import MyPortfolio from './MyPortfolio'

// Context components
import ContentContext from '../../contexts/ContentContext'

// Constants
import { statusMessages } from '../../constants'
const { UNINIT, PENDING, SUCCESS, FAILURE } = statusMessages

const MyPortfolioContainer = () => {
  const content = useContext(ContentContext)
  const { status, data } = content

  const isLoading = status === UNINIT || status === PENDING
  const isSuccess = status === SUCCESS
  const isFailure = status === FAILURE

  return (
    <>
      {isSuccess && <MyPortfolio data={data} />}
      {isLoading && <div>Loading...</div>}
      {isFailure && <div>Failure...</div>}
    </>
  )
}

export default MyPortfolioContainer
