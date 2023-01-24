//import { Link } from "gatsby"
import React from "react"
import Logo from "../components/Logo" // Tell webpack this JS file uses this image

const Content = () => (
  <div className="wrapper">
    <div className="name-wrapper">
      <div className="hi">Hi,</div>
      <div className="name">
        I'm <span>Dor Lugasi-Gal</span>,
      </div>
      <div className="prof">Software Engineer.</div>
    </div>
    <Logo />
  </div>
)

export default Content
