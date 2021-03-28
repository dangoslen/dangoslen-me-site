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
    {tagNames.length > 0 &&
        <span>Filed Under:</span>
      }        
      {tagNames.map((tag) => {      
        return <TagSpan key={tag}>
            <Link
                to={`/tags/${_.kebabCase(tag)}`}
            >{`#${tag}`}</Link>
        </TagSpan>
    })}
    </TagsContainer>
  )
}

const TagsContainer = styled.div`

`

const TagSpan = styled.span`
    padding: 3px;
    margin: 3px;
    border-radius: 3px;
`


export default Tags
