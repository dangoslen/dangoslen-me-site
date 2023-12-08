import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSummary from "../components/blog-summary"

class Search extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Blog"
    const posts = data.posts.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All Posts" description="Dan Goslen's blog on software engineering" />
      
        <div style={{ margin: "20px 0 40px" }}>
          { posts.map(({ node }) => {
              return ( <BlogSummary node={ node } key={node.fields.slug} /> )
          })}

          <Bio />

        </div>
      </Layout>
    )
  }
}

export default Search

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchPosts {
      index
      store
    }
  }
`