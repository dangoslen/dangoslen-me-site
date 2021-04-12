import React from "react"
import styled from "styled-components"

const SocialLink = props => {
  return (
    <Link href={props.to}>{props.children}</Link>
  )
}

const Link = styled.a`
color: var(--primary);
font-size: 3rem;
box-shadow: none;
&:hover {
  color: var(--primary-hover);
}
transition: all .2s;
transition-timing-function: ease;
`

export default SocialLink