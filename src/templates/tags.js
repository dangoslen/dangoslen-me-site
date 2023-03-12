import React from "react"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogSummary from "../components/blog-summary"
import { graphql } from "gatsby"


class TagsTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const siteTitle = `Tags - ${tag}`
    const description = `Dan Goslen's posts about '${tag}'`
    const { edges, totalCount } = this.props.data.tagged
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

    return (
      <Layout location={this.props.location} title={siteTitle}>

      <SEO title={ siteTitle } description={ description } />
        <h1>{tagHeader}</h1>

        <hr/>
      
        {edges.map(({ node }) => {
          return ( <BlogSummary node={ node } key={node.fields.slug} /> )
        })}
        
      </Layout>
    )
  }
}

export default TagsTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    tagged: allMdx (
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`