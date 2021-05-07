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
          keywords={[`software`, `engineering`, `slides`, `talks`]}
        />
         <Card title="Keep a Changelog!"
          links={[
            { to: "https://keep-a-changelog.dangoslen.me/", text: "Slides" },
            { to: "https://github.com/dangoslen/keep-a-changelog/tree/master" , text: "Repo" }
          ]}>
          <p>I'm a big - big - fan of changlogs and how they can help your team. I gave a 5-minute lightning talk about them at my work late last year and wanted to share my slides with you. If you are interested in changelogs, take a look at some of my repositories on my <a href="https://github.com/dangoslen">GitHub Profile</a></p>
        </Card>
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
