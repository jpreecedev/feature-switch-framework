import React from 'react'
import { renderToString } from 'react-dom/server'
import { getOverrides } from '@jpreecedev/react-feature-switches'
import Html from './components/HTML'
import Home from '../shared/Home'

const serverRenderer = () => (req, res) => {
  const overrides = getOverrides(req)

  global.features = {
    first: true,
    second: true,
    ...req.query,
    ...overrides.cookies,
    ...overrides.queryString
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
