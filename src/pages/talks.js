import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PresentationsPage extends React.Component {
  render() {
    const siteTitle = "Presentations"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Presentations"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Check out some of my presentations below.
        </h1>
      </Layout>
    )
  }
}

export default PresentationsPage
