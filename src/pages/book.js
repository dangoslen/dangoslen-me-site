import React from "react"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import EmailSignup from "../components/email-signup"
import styled from "styled-components"
import Toc from "../components/toc.mdx"

class Book extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Code Review Champion"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Code Review Champion" />

        <div>
          <h1>I'm Writing a Book! 🖊️ 📗</h1>
          <h2>Code Review Champion - The Power of Getting Code Reviews Right</h2>
          <p>One of my favorite topics is that of <a href="/tags/code-reviews">code reviews</a>. I think that when applied correctly code reviews can be the <i>best</i> way to level-up your entire team.</p>
          <p>Yet, code reviews continue to be a point of contention in our industry. Some teams have adopted code reviews really well and others have nearly outlawed them. Other teams think they "should" do reviews, but they treat them as a formality or a rubber-stamp.</p>
          <p>But we have great data that show code reviews work. So what is the gap?</p>
          <p><b>I believe it's because many engineers weren't taught how to actually effectively review code.</b></p>
          <p>Even more so, many teams don't know how to manage the process to know if they are actually getting value or if they are just rubber-stamping code.</p>
          <p>I'm writing a book to help engineers and teams do just that - build the skills neccesary to be code review champions!</p>
          <p>Below is what I'm hoping to write about. It's still in the works, so I'd <i>love</i> your <a href="">feedback!</a>.</p>
          <p>If you want more updates as I progress on writing and to get <i>exclusive</i> first access, subscribe to my emails below:</p>
          <div style={{ 
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `40px`
          }}>
              <EmailSignup />
          </div>
        </div>

        <hr />

        <TocWrapper>
          <Title>
            <center>

              <h1>Code Review Champion: The Power of Getting Code Reviews Right</h1>
              <h4>A book to help engineers learn how to be great code reviewers.</h4>

              </center>

              <hr/>
          </Title>
          <TocContent>
            <Toc />
          </TocContent>
        </TocWrapper>

        <div style={{ 
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `40px`
          }}>
              <EmailSignup prompt="And don't forget to signup for my newsletter to hear more about it!"/>
          </div>
      </Layout>
    )
  }
}

const TocWrapper =  styled.div`
  position: relative;
  right: 15%;
  width: 130%;
  padding: 12px;
  border-radius: 8px;
  background: #f19066;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
`

const Title = styled.div`
`

const TocContent = styled.div`
  display: block;
  @media ${Device.tablet} {
    display: flex;
  }

  div {
    width: 100%;
    padding: 5px;
    @media ${Device.tablet} {
      width: 50%;
    }
  }
`

export default Book