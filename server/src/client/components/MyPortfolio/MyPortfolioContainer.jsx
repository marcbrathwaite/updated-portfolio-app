import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash.isempty'

// Components
import MyPortfolio from './MyPortfolio'

// Context
import StaticContext from '../../contexts/StaticContext'

// Manager
import ContentManager from '../../Managers/ContentManager'

// Constants
import { statusMessages } from '../../constants'
const { UNINIT, PENDING, SUCCESS, FAILURE } = statusMessages
const CONTENT_TYPE = 'homePage'

const contentManager = new ContentManager({ contentfulType: CONTENT_TYPE })

const MyPortfolioContainer = ({ location, staticContext }) => {
  const contentData = useContext(StaticContext)
  // Get hash from the URL
  const { hash } = location
  const urlHash = hash.slice(1)

  let [content, setContent] = useState({
    status: UNINIT,
    data: {}
  })
  const { status, data } = content
  const isLoading = status === UNINIT || status === PENDING
  const isSuccess = status === SUCCESS
  const isFailure = status === FAILURE

  useEffect(() => {
    const getContent = async () => {
      setContent({
        status: PENDING,
        data: {}
      })
      try {
        const result = await contentManager.getContentfulContent()
        setContent({
          status: SUCCESS,
          data: result
        })
      } catch {
        setContent({
          status: FAILURE,
          data: {}
        })
      }
    }

    if (content.status === UNINIT && !contentData) {
      getContent()
    } else if (contentData) {
      setContent({
        status: SUCCESS,
        data: contentData
      })
    }
  }, [])

  let testData = data
  if (staticContext) {
    testData = isEmpty(data) ? staticContext.data : data
  }

  return (
    <>
      {(isSuccess || staticContext || contentData) && (
        <MyPortfolio data={testData} urlHash={urlHash} />
      )}
      {isLoading && !staticContext && !contentData && <div>Loading...</div>}
      {isFailure && !staticContext && !contentData && <div>Failure...</div>}
    </>
  )
}

MyPortfolioContainer.propTypes = {
  location: PropTypes.object.isRequired
}

export default {
  component: MyPortfolioContainer,
  loadData: async function() {
    return contentManager.getContentfulContent()
  }
}
