import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import Email from "../components/email-signup"

import { 
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillMediumCircle,
  AiFillGithub
} from "react-icons/ai"

import SocialLink from "../components/social-link"
import Device from "../components/sizing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailSignup from "../components/email-signup"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "About"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `software engineering`, `software design`, `api`, `design`, `changelogs`, `software development lifecycle`]}
        />
        <Profile>
          <div>
            <ProfilePic />
            <Links />
          </div>
          <Biography>
              <Greeting>
                <span role="img" aria-label="wave emoji">
                👋
                </span>
                {" "}Hi, I'm Dan.
              </Greeting>
              <p>I'm a software engineer and an avid coffee drinker.</p>
              <p>In my short career, I've come to learn that no matter where developers are, they are <b>tired and burned out.</b> They never feel like they can learn enough, code quick enough, or keep quality high enough.</p>
              <p>Coding harder or longer doesn't work. We have to do something different.</p>
              <p>We need to develop processes that serve the team rather burden them. We need tools to make it easy to do the right thing rather than the wrong one. We need transparency between peers, managers, and other stakeholders. We need engineers that understood how to lead rather than being heros.</p>
              <p>When these pieces exists, a team should be able to create a pace they can sustain almost indefintely.</p>
              <p><b>I'm trying to help developers achieve sustainable pace.</b></p>
              <p>I'm writing about <a href="https://dangoslen.me/tags/software-engineering">software engineering practices</a>, <a href="https://github.com/dangoslen">building tools to automate processes</a>, and creating resources to help teams work towards a sustainable pace.</p>
              <p>Happy coding!</p>
          </Biography>
        </Profile>

        <hr />


        <div style={{ 
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          marginTop: `10px`,
          marginBottom: `40px`
       }}>
          <div> 
            <EmailSignup prompt="Sign-up below to never miss an update from me! I'll send you my latest articles as well as tools and resources I'm building! 😊"/>
          </div>
        </div>
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
      <SocialLink to="https://medium.com/@dangoslen"><AiFillMediumCircle /></SocialLink>
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

const Greeting = styled.h2`
  text-align: center;
  @media ${Device.tablet} {
    margin-top: 0px;
    text-align: left;
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
