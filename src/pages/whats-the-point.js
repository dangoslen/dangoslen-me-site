import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

class WhatsThePoint extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "What's the Point?"
    const posts = data.posts.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="What's the Point?" />

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
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <BlogTitle>
                  <BlogLink to={`/blog${node.fields.slug}`}>
                      {title}
                  </BlogLink>
                </BlogTitle>
                <BlogSummary>
                  <span>{node.frontmatter.date}{"  ::  "}{node.fields.readingTime.text}</span>
                  <div>
                    <span>{node.frontmatter.description || node.excerpt}</span>        
                  </div>
                </BlogSummary>
              </div>
            )
          })}

          <p></p>

          <hr/>

        </div>
      </Layout>
    )
  }
}

const BlogTitle = styled.h2`
margin-bottom: 0rem;
`

const BlogLink = styled(Link)`
box-shadow: none;
color: #1a1a1a;
&:hover {
  color: #e09b76;
}
transition: all .2s;
transition-timing-function: ease;
text-decoration: none;
`

const BlogSummary = styled.div`
  margin-bottom: 5px; 
`

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
          excerpt
          fields {
            slug
            readingTime {
              text
            }
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