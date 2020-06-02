import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class PresentationsPage extends React.Component {
  render() {
    const siteTitle = "Presentations"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Talks"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Check out some of my talks and presentations below!
        </h1>
        <Card title="Offheap Bloom Filters">
          <Link to="https://offheap-bloom-filter-slides.dangoslen.me/" rel="canonical">Slides</Link>
        </Card>
      </Layout>
    )
  }
}

export default PresentationsPage
