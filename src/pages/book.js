import React from "react"
import { graphql} from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import BookEmail from "../components/book-email"
import Tiles from "../components/tile"

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
          <h1>Become a world-class code reviewer!</h1>
          <h3>📣 Launching January 30th 2024! 📣</h3>
        </div>

        <hr />

        <BookSplit>
          <BookCover image={ data.image.childImageSharp.fluid } />
          <BookIntroduction>    
            <p>Code reviews continue to be a point of contention in our industry. Some teams have adopted code reviews wholeheartedly, while others have nearly outlawed the practice. Other teams think they "should" do reviews, but they treat them as a formality or a rubber-stamp.</p>
            <p>But we have great data that show code reviews work. So what's the gap?</p>
            <p><b>The gap is that most engineers were never taught how to effectively review code.</b></p>
            <p>This book aims to help fix that.</p>
            <p><i>Code Review Champion</i> will teach you how to effectively navigate code reviews to grow your career. From reviewing code to authoring pull requests, and much more, this book will give you practical tools you can use everyday on your team.</p>
            
            <p><b><i>Want 25% off? Enter your email before January 30th and get a discount link on launch day!</i></b></p>
            
            <BookEmail />

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

            <h2>This book walks you through topics like:</h2>

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
          },
          {
            icon: "🙌",
            description: "Avoiding common pitfalls that keep reviews stuck in progress"
          }
        ]} />

        <hr />

        {/* <ReviewContainer >
          <BookReviews />
        </ReviewContainer>

        <hr /> */}

        <div style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `10px`,
              textAlign: "center"
          }}>
            <h3>This book is the book I wish would have read early in my career!</h3>
            <h3>Remember to signup now to grab your discount on launch day!</h3>
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
