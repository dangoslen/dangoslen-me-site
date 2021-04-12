import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const _ = require(`lodash`)

const Tags = props => {
  const { tags } = props;

  let tagNames = tags || []

  console.log(tagNames)

  return (
    <TagsContainer>     
      {tagNames.map((tag) => {      
        return <TagSpan key={tag}>
            <Link
                to={`/tags/${_.kebabCase(tag)}`}
            >{`${tag}`}</Link>
        </TagSpan>
    })}
    </TagsContainer>
  )
}

const TagsContainer = styled.div`

`

const TagSpan = styled.span`
    padding: 3px 6px;
    margin: 2px;
    border-radius: 12px;
    background-color: var(--primary);
    a {
      color: white;
      box-shadow: none;
    }
    &:hover {
      background-color: var(--primary-hover);
    }
`

export default Tags
