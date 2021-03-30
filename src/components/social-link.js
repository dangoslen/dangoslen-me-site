import React from "react"
import styled from "styled-components"

const SocialLink = props => {
  return (
    <Link href={props.to}>{props.children}</Link>
  )
}

const Link = styled.a`
color: #1a1a1a;
font-size: 3rem;
box-shadow: none;
&:hover {
  color: #e09b76;
}
transition: all .2s;
transition-timing-function: ease;
`

export default SocialLink