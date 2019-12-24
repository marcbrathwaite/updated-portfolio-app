import App from './components/App'
import MyPortfolio from './components/MyPortfolio'
import NotFound from './components/NotFound'

export default [
  {
    ...App,
    routes: [
      {
        ...MyPortfolio,
        path: '/',
        exact: true
      },
      {
        ...NotFound
      }
    ]
  }
]
