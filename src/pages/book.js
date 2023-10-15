import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import BookEmail from "../components/book-email"
import Tiles from "../components/tile"
import BookReviews from "../components/book-reviews"

class Book extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Code Review Champion"

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <SEO title={ siteTitle } 
            image={ data.image.childImageSharp.resize.src }
            description="Code Review Champion: Embracing the Power of Technical Feedback"
            keywords={ ["code review", "reviewing code", "code review book", "how to review code", "code review champion"] }
        />

        <div style={{
          textAlign: `center`
        }}>
          <h1>Become a world class code reviewer!</h1>
          <h3>📣 Launching January 30th 2024! 📣</h3>
        </div>

        <hr />

        <BookSplit>
          <BookCover image={ data.image.childImageSharp.fluid } />
          <BookIntroduction>    
            <p>Code reviews continue to be a point of contention in our industry. Some teams have adopted code reviews wholeheartedly while others have nearly outlawed the practice. Other teams think they "should" do reviews, but they treat them as a formality or a rubber-stamp.</p>
            <p>But we have great data that show code reviews work. So what is the gap?</p>
            <p><b>I believe it's because most engineers were never taught how to effectively review code.</b></p>
            <p>On top of that, teams don't know how to manage the process to know if they are actually getting value from their reviews.</p>
            <p>This book aims to fix all of that by teaching engineers how to effectively review code and outlining a path for teams to embrace reviews as a way to grow.</p>
            <center>
              <p><b><i>Signup before January 30th and get 30% off!</i></b></p>
            </center>
            <div style={{ 
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                marginTop: `10px`,
                marginBottom: `40px`
            }}>
          
            <BookEmail />

            </div>
          </BookIntroduction>
        </BookSplit>

        <hr />

        <div style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `10px`
          }}>

            <h2>In this book I cover</h2>

          </div>

        <Tiles tiles={[
          {
            icon: "💡",
            description: "The key mindset shift to unlock code reviews for career growth"
          },
          {
            description: "How to receive and give feedback with humility",
            icon: "🙇‍♂️"
          }, {
            description: "What to pay attention to and what you can let go of",
            icon: "🕵️"
          }, {
            description: "How to build a team practice that sets your team apart",
            icon: "🏗️"
          },
          {
            icon: "🚀",
            description: "The best way to ask for a review to get through the process quickly"
          }
        ]} />

        <hr />

        <ReviewContainer >
          <BookReviews />
        </ReviewContainer>

        <hr />

        <div style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `10px`
          }}>
            <h3>This book is the book I wish I could have read a early in my career to avoid the pitfalls around code reviews.</h3>
            <h3>Signup to know when it's ready for preorder!</h3>
          </div>

        <EmailContainer >
          <BookEmail />
        </EmailContainer>

      </Layout>
    )
  }
}

function BookCover({image}) {
  return (
    <BookCoverWrapper>
      <Img
        fluid={ image }
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
  @media ${Device.laptop} {
    width: 120%;
    margin-left: -10%;
  }

  @media ${Device.halfscreen} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const BookCoverWrapper = styled.div`
  width: 100%;
`

const BookIntroduction = styled.div`
`

const EmailContainer = styled.div`
  form {
    margin: 0 auto;
  }
`

const ReviewContainer = styled.div`
  height: 500px;
`

export default Book

export const pageQuery = graphql`
  query {
    image: file(absolutePath: { regex: "/book-cover.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
        resize(width: 800, quality: 90) {
          src
        }
      }
    }
  }
`
