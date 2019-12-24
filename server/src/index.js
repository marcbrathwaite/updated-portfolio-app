import express from 'express'
import fs from 'fs'
import path from 'path'

import getData from './helpers/getData'
import renderer from './helpers/renderer'

import routes from './client/routes'

const app = express()

// all requests to /static will pull from the dist folder
app.use('/static', express.static('./dist'))

app.get('*', function(req, res) {
  fs.readFile('./dist/index.html', 'utf-8', (err, contentFromHTMLFile) => {
    if (err) {
      return res.status(500)
    }
    const { path } = req

    const promises = getData(routes, path)

    Promise.all(promises).then(responses => {
      // define contetxt object and pass it into renderer function

      const context = { data: {} }
      responses.forEach(r => {
        if (r) {
          Object.assign(context.data, r)
        }
      })

      const content = renderer(path, contentFromHTMLFile, context)
      if (context.notFound) {
        res.status(404) // if user chooses incorrect route, send 404
      }
      res.send(content)
    })
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Application is running on http://localhost:3000/')
})
