import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Who Am I"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          {" "}Hi, I'm Dan.
        </h1>
        <p>I love helping software teams become the best they can be through discipline driven development.</p>
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

export default IndexPage
