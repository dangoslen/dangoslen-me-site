import React from "react"
import styled from "styled-components"
import Device from "../components/sizing"

const BookReview = props => (
    <BookReviewWrapper>
        <Cover>
            <img src={ props.coverUrl } />
        </Cover> 
        <Review>
            <h2><i><a href={props.link}>{props.title}</a> by {props.author}</i></h2>

            { props.children }
        </Review>
    </BookReviewWrapper>
)

const BookReviewWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`

const Cover = styled.div`
  img {
      border: 1px solid gray;
  }
  display: block;
  min-width: 25%;
  margin-right: 20px;
  @media ${Device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const Review = styled.div`
  h2 {
    margin-top: 4px;
  }
  @media ${Device.tablet} {
   margin-top: 0px;
   text-align: left;
  }
`

export default BookReview;