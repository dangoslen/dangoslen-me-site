import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import EmailSignup from "../components/email-signup"
import StickyEmail from "../components/sticky-email"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const keywords = post.frontmatter.keywords || []
    keywords.push(post.frontmatter.tags || [])

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          keywords={keywords}
          image={post.frontmatter.image}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          <Tags tags={post.frontmatter.tags} />
        </p>

        <MDXRenderer>{post.body}</MDXRenderer>
        
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <EmailSignup margins={{ top: `10px`, bottom: `40px` }} prompt="Did you enjoy this post? Sign-up below to never miss an update from me!" />
  
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        keywords
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
