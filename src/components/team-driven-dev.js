import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Device from "./sizing"

import styled from "styled-components"

function TeamDrivenDev() {
  return (
    <StaticQuery
        query={imgQuery}
        render={data => {
        return (
            <ImgContainer>
              <Img
                  fluid={data.light.childImageSharp.fluid}
                  alt="Team work makes the dream work"
                  className={"light-img"}
                  style={{
                    margin: `0 auto`,
                  }}
              />

              <Img
                  fluid={data.dark.childImageSharp.fluid}
                  alt="Team work makes the dream work"
                  className={"dark-img"}
                  style={{
                    margin: `0 auto`,
                  }}
              />
            </ImgContainer>
        )
    }}
    />
  )
}

const ImgContainer = styled.div`
  width: 200px;
  margin: 0 auto;

  @media ${Device.tablet} {
    width: 440px
  }

  @media ${Device.mobileL} {
    width: 380px
  }

  @media ${Device.mobileM} {
    width: 340px
  }
`

const imgQuery = graphql`
  query {
    light: file(relativePath:  { regex: "/team-driven-light.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dark: file(relativePath:  { regex: "/team-driven-dark.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default TeamDrivenDev