import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function TeamDrivenDev() {
  return (
    <StaticQuery
        query={imgQuery}
        render={data => {
        return (
            <div>
                <Img
                    fixed={data.file.childImageSharp.fixed}
                    alt="Team work makes the dream work"
                    style={{
                    margin: `0 auto`,
                    display: `block`
                    }}
                />
            </div>
        )
    }}
    />
  )
}

const imgQuery = graphql`
  query {
    file(relativePath:  { regex: "/team-driven.png/" }) {
      childImageSharp {
        fixed(width: 440) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default TeamDrivenDev