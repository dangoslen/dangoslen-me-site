 import React from "react"
 import { StaticQuery, graphql } from "gatsby"
 import Image from "gatsby-image"
 import styled from "styled-components"
 
 import { rhythm } from "../utils/typography"
 
 function Bio() {
   return (
     <StaticQuery
       query={bioQuery}
       render={data => {
         const { author } = data.site.siteMetadata
         return (
           <Container>
             <Image
               fixed={data.avatar.childImageSharp.fixed}
               alt={author}
               style={{
                 marginRight: rhythm(1 / 2),
                 marginBottom: 0,
                 minWidth: 50,
                 borderRadius: `100%`,
               }}
               imgStyle={{
                 borderRadius: `50%`,
               }}
             />
             <p>
              Dan Goslen is a software engineer, climber, and coffee drinker. He has spent 10 years writing software systems that range
              from monoliths to micro-services and everywhere in between. He's passionate about building great software teams that build great software.
              He currently works as a software engineer in Raleigh, NC where he lives with his wife and son.
             </p>
           </Container>
         )
       }}
     />
   )
 }
 
 const bioQuery = graphql`
   query BioQuery {
     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
       childImageSharp {
         fixed(width: 50, height: 50) {
           ...GatsbyImageSharpFixed
         }
       }
     }
     site {
       siteMetadata {
         author
         defaultImage
       }
     }
   }
 `
 
 const Container = styled.div`
   display: flex;
 `
 
 export default Bio
 