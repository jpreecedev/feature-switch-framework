/* eslint-disable react/prefer-stateless-function, prefer-destructuring, no-plusplus */

import * as React from 'react'

const withFeatureSwitches = Component => {
  class WithFeatureSwitches extends React.Component {
    constructor(props, context) {
      super(props, context)

      if (global.location) {
        this.params = WithFeatureSwitches.getQueryParams(global.location.search);
      }
    }

    static getQueryParams(query) {
      var qs = query.split('+').join(' ');

      var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

      while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = JSON.parse(decodeURIComponent(tokens[2]));
      }

      return params;
    }

    render() {
      const features = {
        ...global.features || {},
        ...this.params
      }

      return <Component features={features} />
    }
  }
  return WithFeatureSwitches
}

export default withFeatureSwitches
