import React from "react"

// Components
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

class TagsTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const siteTitle = this.props.data.site.siteMetadata.title
    const { edges, totalCount } = this.props.data.tags
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <h2><Link to={`/blog${slug}`} >{title}</Link></h2>
              </li>
            )
          })}
        </ul>
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
    tags: allMdx (
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
            title
          }
        }
      }
    }
  }
`