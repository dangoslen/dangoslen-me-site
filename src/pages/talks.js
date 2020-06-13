import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class TalksPage extends React.Component {
  render() {
    const siteTitle = "Talks"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Talks"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Card title="Offheap Bloom Filters"
          links= { <a href="https://offheap-bloom-filter-slides.dangoslen.me/" rel="canonical">Slides</a> }
        >
          <p>Bloom filters are a really cool data structure that trade a small amount of bounded memory use to protect slow resources like databases or network requests. Because they deal with direct bytes, they are also great candidates for off-heap storage within the JVM.</p>
        </Card>
      </Layout>
    )
  }
}


export default TalksPage
