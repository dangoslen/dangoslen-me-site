import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import NewsletterEmail from "../components/newsletter-email"
import Tiles from "../components/tile"
import SimpleNewsletterSignup from "../components/simple-newsletter-signup"

class Newsletter extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Team-Driven Developer Newsletter"

    return (
      <Layout location={this.props.location} title={ siteTitle }>

        <SEO title={ siteTitle } 
          description="Grow Your Career by Building Your Team" 
          image={ data.image.childImageSharp.fluid.src }
          keywords={[`team-driven developer newsletter`, `software engineering newsletter`, `software engineering career growth`, `software engineering teams`]}
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

        <hr />

        <h3>Issues go out every other Tuesday. Every issue includes content to help you build your team!</h3>

        <Tiles tiles={[{
            icon: "📰",
            description: "A long-form article centered on team-driven software engineering practices",
          },
          {
            icon: "🤝",
            description: "A team building exercise so you can take action to improve your team"
          }, {
            icon: "🛠️",
            description: "Tools you can use in your workflows to improve communication and measure effectiveness"
          }, {
            icon: "💼",
            description: "Additional resources for building teams from around the internet"
          }   
          ]} />

          <hr />

          <div style={{textAlign: `center`}} >
            <h2>Let's build great teams together!</h2>

            <h3>Because great teams build great software</h3>

            <SignupContainer>
              <SimpleNewsletterSignup />
            </SignupContainer>  

          </div>
        </div>

      </Layout>
    )
  }
}

const NewsletterContainer = styled.div`
  form {
    margin: 0 auto;
  }
`

const SignupContainer = styled.div`
  form {
    margin: 0 auto;
  }
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