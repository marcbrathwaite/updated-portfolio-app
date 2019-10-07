import React from 'react'
import ReactDOM from 'react-dom'

// Contexts
import { ContentContextProvider } from './contexts/ContentContext'

const TestComponent = () => {
  return <div>This is a test</div>
}

ReactDOM.hydrate(
  <ContentContextProvider>
    <TestComponent />
  </ContentContextProvider>,
  document.getElementById('root')
)
