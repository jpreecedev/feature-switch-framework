import * as React from 'react'

import { withFeatureSwitches } from '@jpreecedev/react-feature-switches'
import First from '../First'
import Second from '../Second'

class Home extends React.Component {
  render() {
    const { features } = this.props

    return (
      <>
        <h1>A simple Universal JavaScript feature switch framework for React</h1>
        <ul>
          {features.first && <First />}
          {features.second && <Second />}
        </ul>
      </>
    )
  }
}

export default withFeatureSwitches(Home)
