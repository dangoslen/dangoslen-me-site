import React, { Children } from "react";

import styled from "styled-components";
import Device from "./sizing";

export const SplitCard = props => {
    return (
        <SplitCardDiv>
            {props.children}
        </SplitCardDiv>
    )
}

const SplitCardDiv = styled.div`
  @media ${Device.laptopL} {
    width: 130%;
    margin-left: -15%;
  }

  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`