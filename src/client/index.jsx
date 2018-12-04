import React from "react"
import { hydrate } from "react-dom"
import Home from "../shared/Home"

import "./styles.scss"

hydrate(<Home />, document.getElementById("app"))

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept()
  }
}
