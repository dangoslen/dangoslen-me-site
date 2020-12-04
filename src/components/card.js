import React from "react"
import styled from "styled-components"

const Card = props => (
    <CardWrapper>
        <CardHeader>
            <h2 style={{ marginTop: `1.75rem`}}>{props.title}</h2>
        </CardHeader> 
        <LinksWrapper> 
            { props.links.map(link => {
                return <CardLink href={link.to}>{link.text}</CardLink>
            })}
        </LinksWrapper>
        <hr />
        { props.children }
    </CardWrapper>
)

const CardWrapper = styled.div`
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
    margin-bottom: 10px;
`

const CardHeader = styled.div`

`

const LinksWrapper = styled.div`
    display: flex;
`

const CardLink = styled.a`
    margin-right: 10px;
`

export default Card;