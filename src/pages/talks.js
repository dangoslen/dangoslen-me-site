import React from "react"

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
          links={[
            { to: "https://offheap-bloom-filter-slides.dangoslen.me/", text: "Slides" },
            { to: "https://github.com/dangoslen/offheap-bloom-filter-slides/tree/master" , text: "Repo" }
          ]}>
          <p>Bloom filters are a really cool data structure that trade a small amount of bounded memory use to protect slow resources like databases or network requests. Because they deal with direct bytes, they are also great candidates for off-heap storage within the JVM.</p>
        </Card>
        <Card title="Couchbase is Cool"
          links={[
            { to: "https://couchbase-intro.dangoslen.me/", text: "Slides" },
            { to: "https://github.com/dangoslen/couchbase-is-cool/tree/master" , text: "Repo" }
          ]}>
          <p>Couchbase is a really cool NoSQL solution that still allows for SQL-like queries. It looks a lot like GFS/HFS in how it distributes data within a cluster, and it even can support cross data-center replication. This is a <i>brief</i> introduction to it.</p>
        </Card>
      </Layout>
    )
  }
}

export default TalksPage
