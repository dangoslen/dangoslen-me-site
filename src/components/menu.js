import React from "react"
import styled from "styled-components"

import Device from "../components/sizing"
import NavLink from "./nav-link"

const Menu = props => {
    return (
        <TopNav>
            <BigLink>
                <NavLink to="/" text="Dan Goslen" />
            </BigLink>
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

const BigLink = styled.div` 
`

export default Menu 
