const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// all requests to /static will pull from the dist folder

app.get('*', function(req, res) {
  // const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html')
  // fs.readFile(pathToHtmlFile, 'utf8', function(err, data) {
  //   res.send(data)
  // })

  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html')
  console.log(pathToHtmlFile)
  // read contents of the file synchronously
  // utf-8 contents of file is encoded in unicode
  const contentFromHTMLFile = fs.readFileSync('./dist/index.html', 'utf-8')
  res.send(contentFromHTMLFile)
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Application is running on http://localhost:3000/')
})
