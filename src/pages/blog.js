import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styled from "styled-components"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Blog"
    const posts = data.posts.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All Posts" />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2
                  style={{ marginTop: `3rem`, marginBottom: `0px`}}
                >
                  <BlogLink 
                      to={`/blog${node.fields.slug}`}>
                      {title}
                  </BlogLink>
                </h2>
                <small>{node.frontmatter.date}</small>{"  ::  "}
                <small>{node.fields.readingTime.text}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
          <hr/>
          <div>
            <p><span role='img' aria-label='person raising hand'> 🙋 </span> p.s. I'm slowly brining over all of my content from <Link to='https://medium.com/@dangoslen'>Medium</Link>! If you find a missing link, feel free to <Link to='https://github.com/dangoslen/dangoslen-me-site/issues/new'>open an issue in this repo on GitHub </Link>. Thanks!</p>
          </div>
          <hr/>
          <Bio />
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

const BlogLink = styled(Link)`
box-shadow: none;
color: black;
&:hover {
  color: rgba(214, 144, 102, 1.0)
}
transition: all .2s;
transition-timing-function: ease;
`

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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