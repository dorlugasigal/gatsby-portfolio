import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
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
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
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
