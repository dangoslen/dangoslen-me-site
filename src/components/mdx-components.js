import styled from "styled-components";
import React from "react";
import { BiLink } from "@react-icons/all-files/bi/BiLink"

import Device from "../components/sizing"

const LinkIcon = styled(BiLink)`
  width: .80em;
  display: none;
  position: absolute;
  margin-left: -30px;
`

const Footnotes = styled.div`
  text-style: italic;
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


function copyToClip() {
  navigator.clipboard.writeText(window.location);
}

export const Components = {
  h2: (props) => {
    if (typeof props.children !== "string") {
      return <h2>{props.children}</h2>
    }

    const link = props.children.replace(" ", "-").toLowerCase()
    return (
      <H2 id={link} >
        <AnchorLink
          href={`#${link}`}
          onClick={() => copyToClip()}
        >
          <LinkIcon />
          {props.children}
        </AnchorLink>
      </H2>
    )},
    wrapper: ({ children, ...props }) => {
      const updatedChildren = children.map(child => {
        if (child.props.className === "footnotes") {
          // Since we only have one element that will ever match this
          // the key doesn't matter, but react will yell without a key.
          return <Footnotes key={1} {...child.props} />;
        }
        return child;
      });
      return <>{updatedChildren}</>;
    }
};