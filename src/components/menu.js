import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Device from "./sizing"
import NavLink from "./nav-link"
import ModeToggle from "./mode-toggle"

const Menu = () => {
    return (
        <StaticQuery
            query={menuQuery}
            render={data => {
                return (
                    <TopNav>
                        <Logo>
                            <Link to="/" >
                                <div className="light-img" >
                                <Img
                                    fixed={data.light.childImageSharp.fixed}
                                />
                                </div>
                                <div className="dark-img" >
                                <Img
                                    fixed={data.dark.childImageSharp.fixed}
                                />
                                </div>
                            </Link>
                        </Logo>
                        <LinksContainer>
                            <NavLink to='/' text="About" />
                            <NavLink to='/blog' text="Blog" add/>
                            <NavLink to='/talks' text="Talks" />
                            <NavLink to='/book' text="📙 Book" />
                            <NavLink to="/newsletter" text="🖊️ Newsletter" />
                            <ModeToggle />
                        </LinksContainer>
                    </TopNav>
                )
            }}
            />
        )
    }

const TopNav = styled.nav`
    width: 100%;
    @media ${Device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const LinksContainer = styled.div`
    padding: 0 10px;
    margin-bottom: 16px;

    @media ${Device.mobileM} {
        margin-bottom: 10px;
    }

    @media ${Device.tablet} {
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

const Logo = styled.div` 
    width: 150px;
    margin: 0 auto;
    
    @media ${Device.tablet} {
        margin: 0;    
    }

    a {
        box-shadow: none;
    }
`

const menuQuery = graphql`
  query menuQuery {
    light: file(absolutePath: { regex: "/logo-light.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dark: file(absolutePath: { regex: "/logo-dark.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Menu 
