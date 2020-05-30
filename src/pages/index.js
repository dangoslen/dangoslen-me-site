import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "About"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `software`, `backend`, `java`, `api`, `design`, `RESTful`]}
        />
        <div 
          style={{
            display: `flex`,
            justifyContent: `space-between`
          }}>
            <div>
                <ProfilePic/>
            </div>
            <div 
              style={{
                marginLeft: rhythm(2),
              }}>
              <h1>
                <span role="img" aria-label="wave emoji">
                👋
                </span>
                {" "}Hi, I'm Dan.
                </h1>
              <p>I'm trying to help developers become the best they can through sustainable development practices.</p>
            </div>
        </div>
        <Link to="/blog/">
          <Button marginTop="35px">My Blog</Button>
        </Link>
        <Link to="/presentations/">
          <Button marginTop="35px">My Talks and Presentations</Button>
        </Link>
      </Layout>
    )
  }
}

function ProfilePic() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath:  { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Profile Picture of Dan Goslen"
        style={{
          borderRadius: `50%`
        }}
      />
    </div>
  )
}

export default IndexPage
