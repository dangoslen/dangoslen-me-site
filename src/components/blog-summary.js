import React from "react"
import { Link } from "gatsby"
import Tags from "../components/tags"

import styled from "styled-components"

const BlogSummary = ({ node: blog }) => {
    return (
        <div>
            <Title>
                <BlogLink to={`/blog${blog.slug || blog.fields.slug}`}>
                    {blog.title || blog.frontmatter.title || blog.slug || blog.fields.slug}
                </BlogLink>
            </Title>
            <Description>
                <span>{blog.date || blog.frontmatter.date}</span>
                <Tags tags={blog.tags || blog.frontmatter.tags} />
                <div>
                    <span>{blog.description || blog.frontmatter.description || blog.excerpt}</span>        
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
  color: var(--text);
  &:hover {
    color: var(--primary-hover);
  }
  transition: all .2s;
  transition-timing-function: ease;
  text-decoration: none;
`

const Description = styled.div`
  margin-bottom: 5px; 
`