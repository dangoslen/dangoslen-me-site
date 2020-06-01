import React from "react"
import styled from "styled-components"
import Menu from "../components/menu"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    
    return (
      <div>
        <TopHeader>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
              padding: `${rhythm(2)} ${rhythm(.75)}`,
            }}>
            <Menu title={title} />
          </div>
        </TopHeader>
        <Wrapper>
            <section
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(40),
                padding: `${rhythm(1.5)} ${rhythm(.75)}`,
              }}>
              <main>{children}</main>
            </section>
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

const Wrapper = styled.div`
  min-height: 100vh;
`
const TopHeader = styled.header`
  background: #fd863f;
  box-shadow: inset 0 -5px 10px 0 #7b6a6a;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
