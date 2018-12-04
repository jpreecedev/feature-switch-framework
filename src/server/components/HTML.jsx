/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'

global.features = {
  first: true,
  second: true
}

function HTML({ children, scripts, css }) {
  const head = Helmet.renderStatic()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {css.map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.features = ${JSON.stringify(global.features)};`
          }}
        />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.map(src => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  )
}

HTML.defaultProps = {
  css: [],
  scripts: []
}

export default HTML
