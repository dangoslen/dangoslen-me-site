import React from "react"
import { graphql} from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import styled from "styled-components"
import Tiles from "../components/tile"
import BookReviews from "../components/book-reviews"

class Book extends React.Component {
  componentDidMount() {
    const ckScript = document.createElement("script");
    ckScript.src = "https://store.dangoslen.me/commerce.js";
    ckScript.async = true;
    this.instance.appendChild(ckScript);
  }

  render() {
    const { data } = this.props
    const siteTitle = "Code Review Champion | Out now!"

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <div ref={(el) => (this.instance = el)}></div>
        <SEO title={ siteTitle } 
            image={ data.image.childImageSharp.resize.src }
            description="Code Review Champion: Embracing the Power of Technical Feedback"
            keywords={ 
              [
                "code review book", 
                "book on code reviews", 
                "code review best practices", 
                "purchase code review book", 
                "how to review code", 
                "code review champion", 
                "technical feedback book", 
                "software engineer code review book", 
                "best book on code reviews", 
                "buy code review book", 
                "how to perform high-quality code reviews", 
                "books on code reviews",
                "code review tools",
                "how to improve my code reviews"
              ] 
            }
        />

        <div style={{
          textAlign: `center`
        }}>
          <h1>Become a world-class code reviewer</h1>
        </div>

        <hr />

        <BookSplit>
          <BookCover image={ data.image.childImageSharp.fluid } />
          <BookIntroduction>    
            <p><b>Code reviews can be frustrating. </b>Conflict can arise, reviews can be slow, or reviewers might be too intimidated to leave their feedback.</p>
            <p>And with <a href="https://www.linkedin.com/pulse/best-practices-impact-code-review-productivity-timelines">84%</a> of companies using code reviews, engineers are bound to encounter them sooner or later.</p>
            <p>Instead of avoiding code reviews or doing the bare minimum when they come your way, what if you could learn the skills to provide effective feedback and get your own code reviewed quickly too?</p>
            <p><b><i>Code Review Champion</i> can show you how.</b></p>
            <p>This short book will teach you how to effectively navigate code reviews to grow your career. From reviewing code to authoring pull requests, and much more, this is the code review book that gives you the practical tools you can use everyday on your team.</p>
          </BookIntroduction>
        </BookSplit>

        <div style={{ 
            display: `grid`,
            alignItems: `center`,
            justifyContent: `center`,
            marginTop: `15px`,
            marginBottom: `1.75em`,
            textAlign: "center"
        }}>
        
          <PurchaseButton href="https://store.dangoslen.me/products/code-review-champion?step=checkout">Grab your copy!</PurchaseButton>

        </div>

        <hr />

        <div style={{ 
          display: `grid`,
          alignItems: `center`,
          justifyContent: `center`,
          marginBottom: `15px`,
          textAlign: "center"
        }}>

          <h2 style={{ marginTop: '15px'}}>What readers are saying:</h2>

        </div>

        <BookReviews />

        <hr />

        <h3 style={{ marginTop: '5px', textAlign: `center`}}>Hear how Anthony used this book to excel at code reviews from day one.</h3>

        <div style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginBottom: `10px`
          }}>


          <iframe width="520px" height="292px" src="https://embed-v2.testimonial.to/v/5595b163-ebaf-43c9-b9e5-32f9440a8df1" frameborder="0" scrolling="no" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style={{ maxWidth: `100%;`}}></iframe>

        </div>

        <hr />

          <div style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginBottom: `10px`
          }}>

            <h2 style={{ marginTop: '15px'}}>Covers critical topics to help you succeed:</h2>

          </div>

        <Tiles tiles={[
          {
            icon: "💡",
            description: "The key mindset shift",
            secondary: "to supercharge your skills"
          },
          {
            description: "Receiving and giving feedback",
            secondary: "with humility and tact",
            icon: "🙇‍♂️"
          }, {
            description: "What to focus on",
            secondary: "and what to let go of",
            icon: "🕵️"
          }, {
            description: "Building a team practice",
            secondary: "that sets your team apart",
            icon: "🏗️"
          },
          {
            icon: "🚀",
            description: "Moving code reviews along",
            secondary: "to prevent endless waiting"
          },
          {
            icon: "🙌",
            description: "Avoiding the pitfalls",
            secondary: "that lead to conflict and bickering"
          }
        ]} />

        <hr />

        <div 
          style={{ 
              display: `grid`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `10px`,
              textAlign: "center"
          }}>
            <p style={{ fontSize: '1.5em', fontFamily: "'Merriweather','Georgia','serif'" }}>This is <b>the book</b> I wish I would have had early in my career to help me sidestep the landmines of code reviews.</p>

            <p style={{ fontSize: '1.5em', fontFamily: "'Merriweather','Georgia','serif'" }}><b>I'm confident it will help you in your software career journey!</b></p>

            <PurchaseButton style={{ width: `50%`, margin: `0 auto` }} href="https://store.dangoslen.me/products/code-review-champion?step=checkout">Buy your copy today!</PurchaseButton>

          </div>
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

const PurchaseButton = styled.a`
  padding: 10px 50px;
  font-size: 1.3em;
  border-radius: 13px;
  border: 2px solid;
  background-color: var(--primary);
  color: white;
  box-shadow: 0px 2.8px 12px rgba(176, 184, 190, 0.1);
  -webkit-transition: background-color ease-in-out 150ms, box-shadow ease-in-out 150ms, color ease-in-out 150ms -webkit-transform ease-in-out 120ms;
  transition: color ease-in-out 150ms, background-color ease-in-out 150ms, box-shadow ease-in-out 150ms, -webkit-transform ease-in-out 120ms;
  transition: color ease-in-out 150ms, background-color ease-in-out 150ms, box-shadow ease-in-out 150ms, transform ease-in-out 120ms;
  transition: color ease-in-out 150ms, background-color ease-in-out 150ms, box-shadow ease-in-out 150ms, transform ease-in-out 120ms, -webkit-transform ease-in-out 120ms;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: var(--primary);
    border-color: var(--primary);
    border: 2px solid;
    box-shadow: 0px 2.8px 15px rgba(176, 184, 190, 0.3);
  }
`

const BookCoverWrapper = styled.div`
  width: 100%;
`

const BookIntroduction = styled.div`
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
