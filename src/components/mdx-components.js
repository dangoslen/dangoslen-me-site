import styled from "styled-components";
import React from "react";
import { BiLink } from "@react-icons/all-files/bi/BiLink"

import Device from "../components/sizing"

const LinkIcon = styled(BiLink)`
  display: none;
  position: absolute;
  margin-left: -40px;
`

const H2 = styled.h2`
  padding-top: 30px; 
  margin-top: -30px;
`;

const AnchorLink = styled.a`
  color: inherit;
  text-decoration: none;
  box-shadow: none;
  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }

  &:hover ${LinkIcon} {
    @media ${Device.laptop} {
      display: inline-block;
    }
  }
`;

let copyRef;

function copyToClip() {
  navigator.clipboard.writeText(window.location);
}

export const Components = {
  h2: (props) => {
    const link = props.children.replace(" ", "-").toLowerCase()
    return (
      <H2 id={link}>
        <AnchorLink
          href={`#${link}`}
          onClick={() => copyToClip(copyRef)}
        >
          <LinkIcon />
          {props.children}
        </AnchorLink>
      </H2>
    )},
};