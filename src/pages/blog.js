import React, { useState, useMemo } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { graphql } from "gatsby"
import styled from 'styled-components'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSummary from "../components/blog-summary"

const mappedDefault = store => {
  return Object.values(store)
}

const Search = props => {
  const { data } = props
  const { site, localSearchPosts } = data
  const { siteTitle } = site.siteMetadata
  const { index, store } = localSearchPosts

  const params = new URLSearchParams(props.location.search);
  const searchQuery = params.get('search')

  const allPosts = useMemo(() => mappedDefault(store), [store]);
  const [query, setQuery] = useState(searchQuery || '', null)
  const [timer, setTimer] = useState(null, null)
  let results = useFlexSearch(query, index, store)
  if (query === '') {
    results = allPosts
  }

  const handleChange = event => {
    if (timer != null) {
      clearTimeout(timer)
    }
    
    const newQuery = event.target.value
    const newTimer = setTimeout(() => {
      setQuery(newQuery)
    }, newQuery === '' ? 100 : 550)
    setTimer(newTimer)
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Dan Goslen Blog" description="Dan Goslen's blog on software engineering" />

      <form>
        <SearchBar
          type='text' 
          placeholder='Search a word or phrase or tag...'
          defaultValue={ searchQuery || '' }
          onChange={ handleChange } />
      </form>

      <PostsContainer>
        { results.map(( node ) => {
            return ( <BlogSummary node={ node } key={ node.slug } /> )
        })}

        <div style={{ marginTop: "40px" }}>

          <hr/>

          <Bio />

        </div>

      </PostsContainer>
    </Layout>
  )
}

export default Search

const PostsContainer = styled.div`
  margin: 20px 0px 40px;
`

const SearchBar = styled.input`
  margin-top: 10px;
  margin-bottom: -20px;
  width: 100%;
  border-radius: 30px;
  padding-left: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-color: #d0b6b08a;
  border-style: solid;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchPosts {
      index
      store
    }
  }
`