import App from './App'
import MyPortfolio from './MyPortfolio'

export default [
  {
    ...App,
    routes: [
      {
        ...MyPortfolio,
        path: '/',
        exact: true
      }
    ]
  }
]
