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
              padding: `6px 10px`,
          }}
          to={to}
        >{text}</Link>
    </NavLinkWrapper>
  )
}

const ActiveBorder = `1px solid rgba(214, 144, 102, 1.0)`

const NavLinkWrapper = styled.div`
  transition: all 0.3s ease-in-out 0s;
  font-family: Montserrat,sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin:0 auto;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.0);
  &:hover {
    border-bottom: ${ActiveBorder};
  }
`


export default NavLink
