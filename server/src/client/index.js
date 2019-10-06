import React from 'react'
import ReactDOM from 'react-dom'

const TestComponent = () => {
  return <div>This is a test</div>
}

ReactDOM.hydrate(<TestComponent />, document.getElementById('root'))
