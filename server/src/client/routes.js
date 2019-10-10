import App from './components/App'
import MyPortfolio from './components/MyPortfolio'

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
