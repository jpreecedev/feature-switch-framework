import * as React from 'react'
import { shallow } from 'enzyme'

import Home from '..'

function render(props) {
  return shallow(<Home {...props} />)
}

test('should be true', () => {
  expect(true).toBe(true)
})
