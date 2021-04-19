import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Device from "../components/sizing"
import NavLink from "./nav-link"

const Menu = props => {
    return (
        <StaticQuery
            query={menuQuery}
            render={data => {
                return (
                    <TopNav>
                        <BigLink>
                            <Link>
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
                        </BigLink>
                        <LinksContainer>
                            <NavLink to='/' text="About" />
                            <NavLink to='/blog' text="Blog" add/>
                            <NavLink to='/talks' text="Talks" />
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
`

const BigLink = styled.div` 
`

const menuQuery = graphql`
  query menuQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Menu 
