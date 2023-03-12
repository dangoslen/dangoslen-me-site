import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const BlogSummary = ({ node }) => {
    return (
        <div>
            <Title>
                <BlogLink to={`/blog${node.fields.slug}`}>
                    {node.frontmatter.title || node.fields.slug}
                </BlogLink>
            </Title>
            <Description>
                <span>{node.frontmatter.date}</span>
                <div>
                    <span>{node.frontmatter.description || node.excerpt}</span>        
                </div>
            </Description>
        </div>
    )
}

export default BlogSummary

const Title = styled.h2`
  margin-bottom: 0rem;
`

const BlogLink = styled(Link)`
  box-shadow: none;
  color: #1a1a1a;
  &:hover {
    color: #e09b76;
  }
  transition: all .2s;
  transition-timing-function: ease;
  text-decoration: none;
`

const Description = styled.div`
  margin-bottom: 5px; 
`