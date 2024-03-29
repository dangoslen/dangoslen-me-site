import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Device from "./sizing"
import NavLink from "./nav-link"

const Menu = props => {
    return (
        <StaticQuery
            query={menuQuery}
            render={data => {
                return (
                    <TopNav>
                        <Logo>
                            <Link to="/" >
                                <Image
                                    fixed={data.logo.childImageSharp.fixed}
                                    style={{
                                        marginRight: rhythm(1 / 2),
                                        marginBottom: 0,
                                        minWidth: 50,
                                        borderRadius: `100%`,
                                    }}
                                    imgStyle={{
                                        borderRadius: `50%`,
                                    }}/>
                            </Link>
                        </Logo>
                        <LinksContainer>
                            <NavLink to='/' text="About" />
                            <NavLink to='/blog' text="Blog" add/>
                            <NavLink to='/talks' text="Talks" />
                            <NavLink to='/book' text="📙 Book" />
                            <NavLink to="/newsletter" text="🖊️ Newsletter" />
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
    @media ${Device.tablet} {
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    @media ${Device.mobileS} {
        margin-bottom: 10px;
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
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Menu 
