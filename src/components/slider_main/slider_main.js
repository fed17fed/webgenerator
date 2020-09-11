import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Popapp from "../popapp"
import "./slider_main.css"

const SliderMain = () => {   
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "main-slider.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <div className="main-single-slide">
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    <div className="slider-link-wrap">
      <Popapp />     
    </div>
    </div>
  )  
}

export default SliderMain
