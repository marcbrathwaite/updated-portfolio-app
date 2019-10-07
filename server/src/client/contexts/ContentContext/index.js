import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Services
import ContenfulClient from '../../services/ContentfulClient'

// Constants
import { statusMessages } from '../../constants'
const { UNINIT, PENDING, SUCCESS, FAILURE } = statusMessages

const DEFAULT_CONTEXT = {
  content: {
    status: UNINIT,
    data: null
  }
}

const CONTENT_TYPE = 'homePage'

const ContentContext = createContext(DEFAULT_CONTEXT)

// Create Provider
export function ContentContextProvider({ children }) {
  const [content, setContent] = useState({
    status: UNINIT,
    data: {}
  })

  useEffect(() => {
    async function getContent() {
      setContent({
        status: PENDING,
        data: {}
      })
      try {
        const result = await ContenfulClient.getModels({
          content_type: CONTENT_TYPE
        })
        setContent({
          status: SUCCESS,
          data: result.items[0]
        })
      } catch {
        setContent({
          status: FAILURE,
          data: {}
        })
      }
    }

    if (content.status === UNINIT) {
      getContent()
    }
  }, [content])

  const value = {
    content
  }

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  )
}

ContentContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContentContext
