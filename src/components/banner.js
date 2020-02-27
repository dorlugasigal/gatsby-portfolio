import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logo.svg"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.svg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">dor lugasi-gal</div>
          <div className="main-image">
            <img alt="logo" src={logo} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  )
}
export default Banner
