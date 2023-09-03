import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import BookEmail from "../components/book-email"

class Book extends React.Component {
  render() {
    const siteTitle = "Code Review Champion"

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <SEO title={ siteTitle } 
            image={`https://dangoslen.me/static/book-cover.png`}
            description="Code Review Champion: Embracing the Power of Technical Feedback"
            keywords={ ["code review", "reviewing code", "code review book", "how to review code", "code review champion"] }
        />

        <div style={{
          textAlign: `center`
        }}>
          <h1>Become a world class code reviewer!</h1>
        </div>

        <hr />

        <BookSplit>
          <BookCover/>
          <BookIntroduction>    
            <p>Code reviews continue to be a point of contention in our industry. Some teams have adopted code reviews wholeheartedly while others have nearly outlawed the practice. Other teams think they "should" do reviews, but they treat them as a formality or a rubber-stamp.</p>
            <p>But we have great data that show code reviews work. So what is the gap?</p>
            <p><b>I believe it's because most engineers were never taught how to effectively review code.</b></p>
            <p>Even more so, many teams don't know how to manage the process to know if they are actually getting value or if they are just rubber-stamping code.</p>
            <p>This book will help engineers and teams build the skills neccesary to be code review champions!</p>
            <p>Signup below to get <i>exclusive</i> first access when the book is ready!</p>
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

        <BookDescription>
          <DescriptionSection>
            <DescriptionIcon>💡</DescriptionIcon> 
            <p>How to receive and give feedback with humility.</p>
          </DescriptionSection>
          <DescriptionSection>
            <DescriptionIcon>🕵️</DescriptionIcon> 
            <p>What to pay attention to as a reviewer - and what to let go of.</p>
          </DescriptionSection>
          <DescriptionSection>
            <DescriptionIcon>🏗️</DescriptionIcon> 
            <p>How to build a team practice that sets your team apart.</p>
          </DescriptionSection>
          <DescriptionSection>
            <DescriptionIcon>🚀</DescriptionIcon> 
            <p>The best way to ask for a review to get through the process quickly.</p>
          </DescriptionSection>
        </BookDescription>


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

        <hr />

        <EmailContainer >
          <BookEmail />
        </EmailContainer>

      </Layout>
    )
  }
}

function BookCover() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath:  { regex: "/book-cover.png/" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BookCoverWrapper>
      <Img
        fluid={data.file.childImageSharp.fluid}
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
  @media ${Device.laptopL} {
    width: 120%;
    margin-left: -10%;
  }

  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const BookCoverWrapper = styled.div`
  width: 100%;

  @media ${Device.laptop} {
    width: 60%;
    margin-right: 40px;
  }
`

const BookIntroduction = styled.div`
`

const BookDescription =  styled.div`
  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
    right: 10%;
    width: 120%;
  }

  margin-bottom: 30px;
`

const DescriptionSection = styled.div`
  font-size: 1.3em;
  display: block;
  text-align: center;
  padding: 15px;
  margin-bottom: 15px;

  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 10px 0px;

  @media ${Device.tablet} {
    width: 40%;
    margin-bottom: 20px;
  }

  div {
    width: 100%;
    padding: 15px;
    @media ${Device.tablet} {
      width: 50%;
    }
  }
`

const DescriptionIcon = styled.p`
  width: 100%;
  display: block;
  align-text: center;
  font-size: 2.2em
`

const EmailContainer = styled.div`
  form {
    margin: 0 auto;
  }
`

export default Book
