import React from "react"
import "../styles/styles.scss"
import { Helmet } from "react-helmet"
import SocialBar from "../components/SocialBar"
//import components
import Content from "../components/content"

const IndexPage = () => (
  <div className="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dor Lugasi-Gal | Software Engineer</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Content />
    <SocialBar />
  </div>
)

export default IndexPage
