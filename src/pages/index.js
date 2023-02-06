import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { AiFillMediumCircle } from "@react-icons/all-files/ai/AiFillMediumCircle"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"

import SocialLink from "../components/social-link"
import Device from "../components/sizing"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "About"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `software engineering`, `software design`, `api`, `design`, `changelogs`, `software development lifecycle`]}
        />
        <Greeting>
            <span role="img" aria-label="wave emoji">
            👋
            </span>
            {" "}Hi there! I'm Dan.
        </Greeting>

        <hr />

        <Profile>

          <div>
            <ProfilePic />
            <Links />
          </div>

          <Biography>
              
              <p>I'm a software engineer, climber, and an avid coffee drinker.</p>
              <p>As an engineer, I've made an observation about the software industry: developers everywhere, are <b>tired and burned out.</b> It feels hard to keep pace with the speed of software with new technologies and tight project timelines.</p>
              <p>What I've discovered is that coding harder or longer doesn't work. We have to do something different.</p>
              <p>Teams need processes that serve them rather than burden them. They need tools to make it easy to do the right thing rather than the wrong one. Teams need leaders that lead rather than being <a href="https://dangoslen.me/blog/on-sustainable-software-development/">heros.</a> We need team-driven development.</p>
              <p>When these pieces exists, a team can create a pace they can sustain almost indefintely.</p>
              <p><b>I'm trying to help developers achieve that kind of sustainable pace.</b></p>
              <p>I'm writing about <a href="https://dangoslen.me/whats-the-point">software engineering best practices</a>, building tools to <a href="https://github.com/dangoslen">automate processes</a>, and creating <a href="https://dangoslen.me/blog/">resources</a> to help teams work together and thrive.</p>
              <p>I hope my experiences can help you and your teams become great. Because great teams write great software.</p>
              <p>Happy coding!</p>
          </Biography>
        </Profile>

        <hr />

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

const Profile = styled.div`
  margin-top: 10px;
  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const Greeting = styled.h1`
  text-align: center;
  @media ${Device.tablet} {
    margin-top: 0px;
  }
`

const Biography = styled.div`
  @media ${Device.tablet} {
    width: 60%;
    margin-left: 20px;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
`

export default IndexPage
