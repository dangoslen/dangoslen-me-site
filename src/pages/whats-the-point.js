import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSummary from "../components/blog-summary"

class WhatsThePoint extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "What's the Point?"
    const posts = data.posts.edges

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <SEO title={ siteTitle } 
          description="A breakdown of top software engineering practices and why they matter" />

        <div>
          <h1>What's the Point?</h1>
          <h2>Why certain best pratices in software engineers are best pratices.</h2>
          <p>The software engineering industry is full of many "pratices". These pratices range from testing, source control management, and even workflow methodology.</p>
          <p>But how are you suppossed to know</p>
          <ul>
            <li>What value that pratice brings to software engineering?</li>
            <li>Will adopting this practice in our team actually help our team?</li>
          </ul>
          <p><b>These are articles are meant to help!</b></p>
          <p>I want to help show how different best practices in the software engineering space can help your team become even better. Some pratices will help you team improve quality while others will improve time-to-market or how you team operates. This page will walk you through such pratices and help you know how to incorporate them into your team.</p>
          <p>Let's dive in!</p>
        </div>

        <hr/>

        <div style={{ margin: "20px 0 40px" }}>
          { posts.map(({ node }) => {
            return ( <BlogSummary node={ node } key={ node.fields.slug } /> )
          })}
        </div>
      </Layout>
    )
  }
}

export default WhatsThePoint

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [ "what's the point" ] } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`