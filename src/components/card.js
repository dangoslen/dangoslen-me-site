import React from "react"
import styled from "styled-components"

import Device from "../components/sizing"

const Card = props => (
    <CardWrapper>
        <CardHeader>
            <h2 style={{ marginTop: `1.75rem`}}>{props.title}</h2>
        </CardHeader> 
        <LinksWrapper> 
            { props.links }  
        </LinksWrapper>
        <hr />
        { props.children }
    </CardWrapper>
)

const CardWrapper = styled.div`
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;

`

const CardHeader = styled.div`

`

const LinksWrapper = styled.div`
    display: flex;
`

export default Card;