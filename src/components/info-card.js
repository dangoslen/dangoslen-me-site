import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import React from "react"
import styled from "styled-components"

const InfoCard = props => {
  const { text } = props;
  return (
    <InfoCardWrapper>
        <IconHolder>
            <BsInfoCircleFill color="#b1b1f1"/>
        </IconHolder>
      <span><i>{text}</i></span>
    </InfoCardWrapper>
  )
}

const IconHolder = styled.div`
    width: 3em;
    margin-left: 1em;
`

const InfoCardWrapper = styled.div`
    border-radius: 6px;
    border: 2px solid #b1b1f1;
    background-color: #c4e1f77d;
    display: flex;
    padding: 6px;
`


export default InfoCard
