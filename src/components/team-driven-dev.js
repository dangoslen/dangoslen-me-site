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
                    fluid={data.file.childImageSharp.fluid}
                    alt="Team work makes the dream work"
                    style={{
                    margin: `0 auto`,
                    display: `block`
                    }}
                />
            </ImgContainer>
        )
    }}
    />
  )
}

const ImgContainer = styled.div`
  width: 300px;
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
    file(relativePath:  { regex: "/team-driven.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default TeamDrivenDev