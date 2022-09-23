import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Img from "gatsby-image"

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

        <div style={{
          textAlign: `center`
        }}>
          <h1>I'm Writing a Book! 🖊️ 📗</h1>
        </div>

        <hr />

        <BookSplit>
          <BookCover/>
          <BookIntroduction>    
            <p>Code reviews continue to be a point of contention in our industry. Some teams have adopted code reviews really well and others have nearly outlawed them. Other teams think they "should" do reviews, but they treat them as a formality or a rubber-stamp.</p>
            <p>But we have great data that show code reviews work. So what is the gap?</p>
            <p><b>I believe it's because most engineers were never taught how to effectively review code.</b></p>
            <p>Even more so, many teams don't know how to manage the process to know if they are actually getting value or if they are just rubber-stamping code.</p>
            <p>I'm writing this book to help engineers and teams build the skills neccesary to be code review champions!</p>
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
          </BookIntroduction>
        </BookSplit>

        <hr />

        <TocWrapper>
          <Title>
            <center>

              <h1>Code Review Champion: Embracing the Power of Technical Feedback</h1>

              </center>

              <hr/>
          </Title>
          <TocContent>
            <Toc />
          </TocContent>
        </TocWrapper>

        <div style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `40px`
          }}>
            <div>
              <h3>Seriously - I'd <i>love</i> <a href="https://forms.gle/fgucFk8kHyS5tY9D9" target="_blank">to get your feedback!</a></h3>
            </div>

            <div>
              <EmailSignup prompt="And don't forget to signup for my newsletter to hear more about it!"/>
            </div>
          </div>
      </Layout>
    )
  }
}

function BookCover() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath:  { regex: "/book-cover.png/" }) {
        childImageSharp {
          fixed(width: 450) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <BookCoverWrapper>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Code Review Champion Book Cover"
        style={{
          margin: `0 auto`,
          display: `block`
        }}
      />
    </BookCoverWrapper>
  )
}

const BookSplit = styled.div`
  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const BookCoverWrapper = styled.div`
  @media ${Device.tablet} {
    width: 60%;
    margin-left: 0px;
  }
  margin-right: 40px;
`

const BookIntroduction = styled.div`
`

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