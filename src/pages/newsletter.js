import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import BookEmail from "../components/book-email"
import NewsletterEmail from "../components/newsletter-email"

class Newsletter extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Team-Driven Developer Newsletter"

    return (
      <Layout location={this.props.location} title={ siteTitle }>
        <SEO title={ siteTitle } description="Team-Driven Developer Newsletter" />

        <div style={{
          textAlign: `center`
        }}>
          
          <h1>Join the Team-Driven Developer Newsletter!</h1>
        
        </div>

        <hr />

        <div>    
            
          <h3>Building great software teams is tricky.</h3>

          <p>Whether it's a team you manage or a team you are on, there are lots of ingredients to get right.</p>

          <p>But when we <i>do</i> get it right, you get a high-performance software team that is unstoppable.</p>
                    
          <p>In this newsletter you'll get the tips, tools, and mindsets I've learned after a decade in the industry to build such a team.</p>
          
          <NewsletterContainer>
            <NewsletterEmail />
          </NewsletterContainer>

          <h3>Every other Tuesday you'll get:</h3>

          <ul>
              <li>A long-form article centered on team-driven software engineering practices</li>
              <li>Additional resources to help your team grow</li>
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