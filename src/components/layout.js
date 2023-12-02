import React from "react"
import styled from "styled-components"
import Menu from "../components/menu"
import Banner from "./banner"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    
    return (
      <div>
        <Banner name="announcement-banner" 
          text="🎉 Code Review Champion launch date announced!" 
          cta="Learn more!"
          link="/book" 
          color="#d69066" 
          delay={ 5 }
          />
        <Header>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
            }}>
            <Menu title={title} />
          </div>
        </Header>
        <Wrapper>
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(36),
                padding: `${rhythm(.75)} ${rhythm(.75)}`,
              }}>
              <main>{children}</main>
            </div>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.section`
  min-height: 100vh;
`
const Header = styled.header`
  background-color: #f3f3f3;
  border-bottom: 1px solid #dcdcdc;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
