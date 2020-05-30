import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = props => {
  const { to, text } = props;

  return (
    <NavLinkWrapper>
      <Link
          style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              padding: `6px 10px`
          }}
          to={to}
        >{text}</Link>
      </NavLinkWrapper>
  )
}

const NavLinkWrapper = styled.div`
border-radius: 4px;
transition: all 0.3s ease-in-out 0s;
font-family: Montserrat,sans-serif;
font-size: 1.2rem;
font-weight: 400;
&:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
}
`

export default NavLink
