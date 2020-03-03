//import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.svg" // Tell webpack this JS file uses this image

const Content = () => (
  <div className="wrapper">
    <div className="logo">
      <img alt="" src={logo} />
    </div>
    <div className="container">
      <div id="hi">Hi, My name is</div>
      <div id="name">Dor Lugasi-gal</div>
      <div id="profession">Software Developer</div>
    </div>
  </div>
)

export default Content
