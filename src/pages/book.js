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
    const siteTitle = "Code Review Champion: Embracing the Power of Technical Feedback | Out now!"

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        <div ref={(el) => (this.instance = el)}></div>
        <SEO title={ siteTitle } 
            image={ data.image.childImageSharp.resize.src }
            description="A book designed to help software engineers become world-class code reviewers. Learn how to provide effective technical feedback, get your own code reviewed quickly, and grow your career."
            keywords={ 
              [
                "code review book", 
                "buy a book on code reviews", 
                "how to review code book", 
                "code review champion", 
                "technical feedback book", 
                "software engineer code review book", 
                "best book on code reviews",
                "code review best practices book", 
                "how to improve my code reviews",
                "learn to review code",
                "overcoming code review anxiety",
                "dealing with code review anxiety",
              ] 
            }
        />

        <div style={{
          textAlign: `center`
        }}>
          <h1>Become a world-class code reviewer!</h1>
        </div>

        <hr />

        <BookSplit>
          <BookCover image={ data.image.childImageSharp.fluid } />
          <BookIntroduction>    
            <p><b>Code reviews can be frustrating.</b></p>
            <p>Review anxiety is real, conflict can arise, and it can be difficult to know what to focus on.</p>
            <p>And with <a href="https://www.linkedin.com/pulse/best-practices-impact-code-review-productivity-timelines">84%</a> of companies using code reviews, engineers are bound to encounter them sooner or later.</p>
            <p>Instead of avoiding code reviews or doing the bare minimum, what if you could learn the skills to provide effective feedback and get your own code reviewed quickly too?</p>
            <p><b><i>Code Review Champion</i> can teach you how!</b></p>
          </BookIntroduction>
        </BookSplit>

        <div style={{ 
            marginTop: `50px`,
            marginBottom: `50px`,
            textAlign: "center"
        }}>
          <p>This short book will teach you how to effectively navigate code reviews to grow your career. From reviewing code to authoring pull requests, and much more, this is the code review book that gives you the practical tools you can use everyday on your team.</p>
        
          <PurchaseButton style={{ width: '66%', fontSize: '1.2em', fontFamily: "'Merriweather','Georgia','serif'" }} href="https://store.dangoslen.me/products/code-review-champion?step=checkout">Grab your copy now!</PurchaseButton>
        </div>

        <hr />

        <div style={{ 
          display: `grid`,
          alignItems: `center`,
          justifyContent: `center`,
          textAlign: "center",
          marginBottom: '-25px'
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
            <p style={{ fontSize: '1.5em', fontFamily: "'Merriweather','Georgia','serif'" }}>This is <b>the book</b> I wish I would have had early in my career to help me sidestep the landmines of code reviews and grow faster.</p>

            <p style={{ fontSize: '1.5em', fontFamily: "'Merriweather','Georgia','serif'" }}><b>I'm confident it will help you in your software career journey!</b></p>

            <PurchaseButton style={{ width: `66%`, margin: `0 auto` }} href="https://store.dangoslen.me/products/code-review-champion?step=checkout">Buy your copy today!</PurchaseButton>

          </div>
      </Layout>
    )
  }
}

function BookCover({image}) {
  return (
    <BookCoverWrapper>
      <a href="https://store.dangoslen.me/products/code-review-champion?step=checkout">
      <Img
        fluid={ image }
        alt="Code Review Champion Book Cover"
        style={{
          margin: `0 auto`,
          display: `block`
        }}
      />
      </a>
    </BookCoverWrapper>
  )
}

const BookSplit = styled.div`
  text-align: center;

  @media ${Device.laptop} {
    text-align: left; 
    width: 120%;
    margin-left: -10%;
  }

  @media ${Device.halfscreen} {
    display: flex;
    justify-content: center;
    align-items: center;
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
  margin-top: 20px;

  @media ${Device.laptop} {
    margin-top: 0px;
  }
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
