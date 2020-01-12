import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import routes from '../client/routes'

export default (path, html, context) => {
  const sheet = new ServerStyleSheet()
  // Static router has one required property called context, which gives us the abaility to community from our rendered components back to this renderer file
  // Another prop, location, is used for determining what components should be displayed based on the url
  // renderRoutes transforms the array of objects into the route definitions
  const serverHTML = renderToString(
    <StaticRouter location={path} context={context}>
      <StyleSheetManager sheet={sheet.instance}>
        <div>{renderRoutes(routes)}</div>
      </StyleSheetManager>
    </StaticRouter>
  )
  const styles = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()
  // Put rendered HTML between the div#root tags in the html file
  const regex = /(<div id="root">)(<\/div>)/
  html = html.replace(regex, function(original, div1, div2) {
    return div1 + serverHTML + div2
  })
  // Put title, meta and styles in head on html
  const head = helmet.title.toString() + helmet.meta.toString() + styles
  const index = html.indexOf('</head>')
  const html1 = html.slice(0, index)
  const html2 = html.slice(index)
  return html1 + head + html2
}
