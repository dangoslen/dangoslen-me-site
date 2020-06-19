import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { scale } from "../utils/typography"

import Device from "../components/sizing"
import NavLink from "./nav-link"

const Menu = props => {
    return (
        <TopNav>
            <Link style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`
                }}
                to="/"
                >
                <h1
                    style={{
                        ...scale(1.0),
                        marginBottom: 0,
                        marginTop: 0,
                        textAlign: `center`
                    }}>
                    Dan{" { "}Goslen{" }"}
                </h1>
            </Link>
            <LinksContainer>
                <NavLink to='/' text="About" />
                <NavLink to='/blog' text="Blog" />
                <NavLink to='/talks' text="Talks" />
            </LinksContainer>
        </TopNav>
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
        justify-content: space-evenly;
        align-items: center;
    }
`

export default Menu 
