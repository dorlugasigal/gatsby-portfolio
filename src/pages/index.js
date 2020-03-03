import React from "react"
import "../styles/styles.scss"
import { Helmet } from "react-helmet"

//import components
import Content from "../components/content"

const IndexPage = () => (
  <div className="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dor Lugasi-Gal | Software Engineer</title>
    </Helmet>
    <Content />
  </div>
)

export default IndexPage
