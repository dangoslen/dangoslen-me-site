import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"

import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { AiFillMediumCircle } from "@react-icons/all-files/ai/AiFillMediumCircle"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"

import SocialLink from "../components/social-link"
import Device from "../components/sizing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleNewsletterSignup from "../components/simple-newsletter-signup"
import TeamDrivenDev from "../components/team-driven-dev"
import { SplitCard } from "../components/split-card"
import Banner from "../components/banner"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "About"

    return (      
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`dan goslen home page`, `team-driven developer`, `software engineering newsletter`, `software engineering blog`, `software design blog`]}
        />

        <SplitCard>

          <TeamDrivenDev />

          <CallToAction>

            <h1>Grow your career by building your team.</h1>

            <p>Join the <Link to="/newsletter" style={{ color: `hsl(0deg 0% 0% / 90%)`}}>Team-Driven Developer Newsletter</Link> to learn the tips and tools to building great software teams. Issues go out every other Tuesday.</p> 

            <p>Because great teams build great software.</p>

            <SimpleNewsletterSignup />

          </CallToAction>

        </SplitCard>

        <hr />

        <Greeting>
            <span role="img" aria-label="wave emoji">
            👋
            </span>
            {" "}Hi there! I'm Dan.
        </Greeting>

        <Profile>

          <ProfilePic />

          <Bio>
            <p>I'm a software engineer, climber, and an avid coffee drinker.</p>
            <p>I've noticed in the software industry that developers everywhere are <b>tired and burned out.</b> It feels impossible to keep pace with the speed of software and tight project timelines.</p>
            <p>What I've discovered is that the solution isn't coding harder or longer. We have to do something different.</p>
            <p>Teams need processes that serve them rather than burden them. They need tools to make it easy to do the right thing. Teams need leaders that lead rather than being <a href="https://dangoslen.me/blog/on-sustainable-software-development/">heros.</a></p>
            <p><b>We need team-driven development.</b></p>
            <p>I'm writing about <a href="https://dangoslen.me/whats-the-point">software engineering best practices</a>, building tools to <a href="https://github.com/dangoslen">automate processes</a>, and creating <a href="https://dangoslen.me/blog/">resources</a> to help teams work together and thrive.</p>
            <p>I hope my experiences can help you and your teams become great. Because great teams write great software.</p>
            <p>Happy coding!</p>
          </Bio>

        </Profile>

        <hr />

        <SocialContainer>

          <h2>Let's connect!</h2>

          <Links />

        </SocialContainer>

      </Layout>
    )
  }
}

function ProfilePic() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath:  { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Profile Picture of Dan Goslen"
        style={{
          borderRadius: `50%`,
          margin: `0 auto`,
          display: `block`
        }}
      />
    </div>
  )
}

function Links() {
  return (
    <Social>
      <SocialLink to="https://twitter.com/dangoslen"><AiFillTwitterCircle /></SocialLink>
      <SocialLink to="https://linkedin.com/in/dangoslen"><AiFillLinkedin /></SocialLink>
      <SocialLink to="https://dangoslen.medium.com/membership"><AiFillMediumCircle /></SocialLink>
      <SocialLink to="https://github.com/dangoslen"><AiFillGithub /></SocialLink>
    </Social>
  )
}

const Greeting = styled.h1`
  text-align: center;
  @media ${Device.tablet} {
    margin-top: 0px;
  }
`

const Profile = styled.div`
  margin-top: 50px;
  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const Bio = styled.div`
  @media ${Device.tablet} {
    margin-left: 50px;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const CallToAction = styled.div`
  @media ${Device.tablet} {
    width: 60%;
    margin-left: 20px;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
`

const SocialContainer = styled.div`
  text-align: center;
`

export default IndexPage
