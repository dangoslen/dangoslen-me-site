import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const _ = require(`lodash`)

const Tags = props => {
  const { tags } = props;
  const tagNames = tags || []

  return (
    <TagsContainer>     
      {tagNames.map((tag) => {     
        let href = `/tags/${_.kebabCase(tag)}`
        if (tag === "what's the point") {
          href = `/whats-the-point`
        }
        return <TagSpan key={tag}>
            <Link to={ href }>{`${tag}`}</Link>
        </TagSpan>
    })}
    </TagsContainer>
  )
}

const TagsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const TagSpan = styled.span`
    padding: 1px 10px;
    margin: 2px;
    border-radius: 14px;
    background-color: var(--primary);
    a {
      color: white;
      box-shadow: none;
      text-decoration: none;
    }
    &:hover {
      background-color: var(--primary-hover);
    }
`

export default Tags
