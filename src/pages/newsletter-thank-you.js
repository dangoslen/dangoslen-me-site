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
    const { data } = this.props
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
            <p>I'm <i>really</i> glad you are here!</p>
            <p>From here on out you'll be getting issues of the Team-Driven Developer Newsletter! Issues go out every other Tuesday.</p>
            <p>Each issue includes tips, tools, and resources to help you build your software team!</p>
            <p>While you are here, take a look around! Here are some of the top resources:</p>
            <ul style={{paddingLeft: `20px`}}>
              <li><Link to="/tags/whats-the-point"><b>What's the point?</b></Link> Articles about applying industry best-practices to your team.</li>
              <li><Link to="/blog/my-top-four-patterns-for-writing-simple-code/"><b>My Top Four Patterns for Writing Simple Code</b></Link></li>
              <li><Link to="/blog/surviving-your-first-code-review/"><b>Surviving Your First Code Review</b></Link></li>
            </ul>
            <p>Be on the lookout for an email from me tomorrow with a few more details about the newsletter what to expect.</p> 
            <p>SO glad to have you here!</p>
            <p>Happy coding!</p>
          </ThankYou>

        </SplitCard>

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