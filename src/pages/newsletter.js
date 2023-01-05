import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import BookEmail from "../components/book-email"
import NewsletterEmail from "../components/newsletter-email"

class Book extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Code Review Champion"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Code Review Champion" 
            image={`https://dangoslen.me/static/book-cover.png`}
        />

        <div style={{
          textAlign: `center`
        }}>
          <h1>Join my newsletter! 📄</h1>
        </div>

        <hr />

        <div>    
            
            <h3>I'm a firm believer that great teams write great software.</h3>
            <h3>But soo often we don't spend enough time building our teams into great ones.</h3>
            
            <p>This newsletter is meant to help you do just that - starting building your team.</p>

            <p>Every two weeks I send you:</p>

            <ul>
                <li>My most recent article centered on software engineering practices (with occasional other topics)</li>
                <li>Resouces that I've created or have discovered to help build your team</li>
                <li>Links to tools you can use in your workflows to improve communication and measure effectiveness</li>
            </ul>
            
            <div style={{ 
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                marginTop: `10px`,
                marginBottom: `40px`
            }}>

                <h3>Let's build great teams together!</h3>
          
                <NewsletterEmail />

            </div>
          </div>
      </Layout>
    )
  }
}

export default Book