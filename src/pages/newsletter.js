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

        <div style={{
          textAlign: `center`
        }}>
          <h2>Here is what you can expect from each issue every other Tuesday:</h2>
        </div>

        <Tiles tiles={[{
            icon: "📰",
            description: "A long-form article",
            secondary: "focused on software best practices"
          },
          {
            icon: "🤝",
            description: "A team building exercise",
            secondary: "to help create an incredible team"
          }, {
            icon: "🛠️",
            description: "Tools and tips",
            secondary: "to improve collaboration"
          }, {
            icon: "💼",
            description: "Additional resources",
            secondary: "for building teams from around the internet"
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