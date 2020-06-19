import React from "react"
import styled from "styled-components"

const SocialLink = props => {
  return (
    <Link href={props.to}>{props.children}</Link>
  )
}

const Link = styled.a`
color: #d69066;
font-size: 3rem;
box-shadow: none;
&:hover {
  color: #e68d5e;
}
transition: color .5s;
transition-timing-function: ease;
`

export default SocialLink