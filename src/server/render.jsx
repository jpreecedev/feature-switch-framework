import React from 'react'
import { renderToString } from 'react-dom/server'
import Html from './components/HTML'
import Home from '../shared/Home'

const getQueryParams = (query) => {
  var qs = query.split('+').join(' ')

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = JSON.parse(decodeURIComponent(tokens[2]))
  }

  return params
}

const parse = collection =>
  Object.keys(collection)
    .map(key => ({ [key]: JSON.parse(collection[key]) }))
    .reduce((acc, item) => ({ ...acc, ...item }), {})

const serverRenderer = () => (req, res) => {
  const features = {
    queryString: parse(getQueryParams(req.url.replace('/?', ''))),
    cookies: parse(req.cookies)
  }

  global.features = {
    first: true,
    second: true,
    ...req.query,
    ...features.cookies,
    ...features.queryString
  }

  return res.send(
    `<!doctype html>${renderToString(
      <Html
        css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
        scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
      >
        {renderToString(<Home />)}
      </Html>
    )}`
  )
}

export default serverRenderer
