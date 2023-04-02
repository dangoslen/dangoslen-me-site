import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import NewsletterEmail from "../components/newsletter-email"

class Newsletter extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Team Driven Developer Newsletter"

    return (
      <Layout location={this.props.location} title={ siteTitle }>
        <SEO title={ siteTitle } description="Team Driven Developer Newsletter" />

        <div style={{
          textAlign: `center`
        }}>
          
          <h1>Join my newsletter! 🖊️</h1>
        
        </div>

        <hr />

        <div>    
            
          <h3>Are you trying to build a great software team?</h3>

          <p>Building great software teams is tricky. Whether it's a team you manage or a team you are on, there are lots of ingredients to get right.</p>

          <p>But when we <i>do</i> get it right, a great software team is seemingly unstoppable.</p>
          
          <p><b>Yet we only focus on individual growth instead of team growth.</b></p>
          
          <p>This newsletter is meant to give you some tools and tips on how to build your team. After a decade in the industry, I've seen how the wrong person can destroy a team, the right challenge can motivate one, and the incredible power of focusing on team success over individual success.</p>
          
          <NewsletterContainer>
            <NewsletterEmail />
          </NewsletterContainer>

          <br />

          <h3>Every two weeks I send you:</h3>

          <ul>
              <li>My most recent article centered on software engineering practices (with occasional other topics)</li>
              <li>Resouces that I've created or have discovered to help build your team</li>
              <li>Links to tools you can use in your workflows to improve communication and measure effectiveness</li>
          </ul>

          <div style={{
            textAlign: `center`
          }}>
            <h2>Let's build great teams together!</h2>
          </div>
        </div>

      </Layout>
    )
  }
}

const NewsletterContainer = styled.div`
    width: 124%;
    margin-left: -12%;
`

export default Newsletter