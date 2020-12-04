import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

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

class IndexPage extends React.Component {
  render() {
    const siteTitle = "About"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `software`, `backend`, `java`, `api`, `design`, `REST`, `engineering`]}
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
              <p>I'm a software engineer with over 10 years experience. I've worked with monotholic database applications, micro-services, and everything in between. While I've done full-stack development before, I've recently focused primarliy on writing RESTful web-services systems deployed into Kubernetes environments.</p>
              <p>In my short career, I've worked for small companies ({"<"} 20 employees), large companies ({">"} 50,000) and a few medium ones too. And what I have found is that at <b>all</b> of these compnaies, developers are <b>tired and burned out.</b> They never feel like they can learn enough, code quick enough, or keep quality high enough.</p>
              <p>I want to help fix that problem.</p>
              <p><b>I'm trying to help developers become the best they can through sustainable development practices.</b> Even with software engineering being a young field, we know enough to know simply asking developers to code hard or longer doesn't work.</p>
              <p>I hope I can share the learnings and hopes I have gained from my own experience to others, including you.</p>
              <p>Happy coding!</p>
          </Biography>
        </Profile>``
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
