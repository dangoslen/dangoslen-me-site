import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import TeamDrivenDev from "../components/team-driven-dev"
import { SplitCard } from "../components/split-card"

class Book extends React.Component {
  render() {
    const siteTitle = "Team-Driven Developer Newsletter"

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <SEO title={ siteTitle } 
            description="Thanks for subscribing to the newsletter!"
            keywords={ [] }
        />

        <div style={{
          textAlign: `center`
        }}>
          <h1>🥳 Thanks for subscribing! 🥳</h1>
        </div>

        <hr />

        <SplitCard>

          <TeamDrivenDev />
          
          <ThankYou>   
            <p><b>So glad</b> to have you here!</p>
            <p>Be on the lookout for an email to confirm you subscription in your inbox. From here on out you'll be getting issues of the Team-Driven Developer Newsletter.</p>
            <p>Each issue includes tips, tools, and resources to help you build your software team! You can preview some of my top top resources below:</p>
            <ul style={{paddingLeft: `20px`}}>
              <li><Link to="/tags/whats-the-point"><b>What's the point?</b></Link></li>
              <li><Link to="/blog/my-top-four-patterns-for-writing-simple-code/"><b>My Top Four Patterns for Writing Simple Code</b></Link></li>
              <li><Link to="/blog/surviving-your-first-code-review/"><b>Surviving Your First Code Review</b></Link></li>
            </ul>
            <p>I, sadly, publish issues somewhat infrequently nowadays, so no worries if you even want to unsubscribe. I want to provide value, but that can vary from person to person.</p> 
          </ThankYou>

        </SplitCard>

        <hr />

        <div style={{
          textAlign: `center`
        }}>
          <h2>Again: SO glad to have you here! 🎉</h2>
        </div>

      </Layout>
    )
  }
}

const ThankYou = styled.div`
  @media ${Device.tablet} {
    width: 60%;
    margin-left: 20px;
  }
`

export default Book