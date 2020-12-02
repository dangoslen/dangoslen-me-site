import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = props => {
  const { to, text, activeStyle } = props;
  const activeStyleApplied = activeStyle ? activeStyle : { borderBottom: `${ActiveBorder}` };
  console.log(activeStyleApplied)
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
          activeStyle={ activeStyleApplied }
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

  & a:hover {
    border-bottom: ${ActiveBorder};
  }
`


export default NavLink
