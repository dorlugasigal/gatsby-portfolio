import React from "react"
import "../styles/styles.scss"
import { Helmet } from "react-helmet"
import SocialBar from "../components/SocialBar"
//import components
import Content from "../components/Content"

const IndexPage = () => (
  <div className="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dor Lugasi-Gal | Software Engineer</title>
    </Helmet>
    <Content />
    <SocialBar />
  </div>
)

export default IndexPage
