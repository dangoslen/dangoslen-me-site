import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSummary from "../components/blog-summary"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Blog"
    const posts = data.posts.edges
    const tags = data.tags.distinct

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All Posts" description="Dan Goslen's blog on software engineering" />
      
        <div style={{ margin: "20px 0 40px" }}>
          { posts.map(({ node }) => {
              return ( <BlogSummary node={ node } key={node.fields.slug} /> )
          })}

          <hr/>

          <div>
            <p><span role='img' aria-label='person raising hand'> 🙋 </span> p.s. I'm slowly brining over all of my content from <Link to='https://medium.com/@dangoslen'>Medium</Link>! If you find a missing link, feel free to <Link to='https://github.com/dangoslen/dangoslen-me-site/issues/new'>open an issue in this repo on GitHub </Link>. Thanks!</p>
          </div>

          <hr/>

          <Bio />

        </div>
      </Layout>
    )
  }
}

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
    tags: allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`