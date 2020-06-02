import React from "react"
import styled from "styled-components"

import Device from "../components/sizing"

const Card = (props, children) => (
    <CardWrapper>
        <CardHeader>
            <h1 style={{ marginTop: `1.75rem`}}>{props.title}</h1>
        </CardHeader>    
        <hr />
    </CardWrapper>
)

const CardWrapper = styled.div`
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    
    @media ${Device.tablet} {
        width: 50%;
    }
`

const CardHeader = styled.div`
    @media ${Device.tablet} {
        justify-content: space-between;
        align-items: center;
    }
`

export default Card;