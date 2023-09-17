import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import NewsletterEmail from "../components/newsletter-email"
import TeamDrivenDev from "../components/team-driven-dev"

class Newsletter extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Team-Driven Developer Newsletter"

    return (
      <Layout location={this.props.location} title={ siteTitle }>

        <SEO title={ siteTitle } 
          description="Team-Driven Developer Newsletter" 
          image={ data.image.childImageSharp.fluid.src }
        />

        <div style={{
          textAlign: `center`
        }}>
          
          <h1>Grow your career by building your team!</h1>
        
        </div>

        <div>    
                
          <NewsletterContainer>
            <NewsletterEmail />
          </NewsletterContainer>

          <h3>Every other Tuesday you'll get:</h3>

          <ul>
              <li>A long-form article centered on team-driven software engineering practices</li>
              <li>A team building exercise so you can take action to improve your team</li>
              <li>Tools you can use in your workflows to improve communication and measure effectiveness</li>
          </ul>

          <hr />

          <div style={{
            textAlign: `center`
          }}>
            <h2>Let's build great teams together!</h2>

            <h3>Because great teams build great software</h3>
          </div>
        </div>

      </Layout>
    )
  }
}

const NewsletterContainer = styled.div`
`

export default Newsletter

export const pageQuery = graphql`
  query {
    image: file(absolutePath: { regex: "/team-driven.png/" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`