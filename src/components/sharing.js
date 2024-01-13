import React from "react"
import styled from "styled-components"
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from "react-share"
import {
    AiOutlineShareAlt
} from "@react-icons/all-files/ai/AiOutlineShareAlt"

import Device from "./sizing"

const SharingButtons = props => {
  const { title, description, url } = props;
  return (
    <SharingContainer>
        <div style={{ margin: `auto auto`, verticalAlign: `center` }}>
            <AiOutlineShareAlt size="20px" />
        </div>
        <FacebookShareButton url={ url } windowWidth="200px">
            <FacebookIcon size="30px" />
        </FacebookShareButton>
        <LinkedinShareButton url={ url } windowWidth="200px" >
            <LinkedinIcon size="30px"/>
        </LinkedinShareButton>
        <TwitterShareButton url={ url } >
            <TwitterIcon size="30px"/>
        </TwitterShareButton>
    </SharingContainer>
  )
}

const SharingContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    padding: 8px;
    padding-bottom: 2px;
    background: #f3f3f3;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    gap: 5px;

    @media ${Device.laptopL} {
        bottom: initial;
        top: 240px;
        right: 180px;
        flex-direction: column;
    }

    @media ${Device.laptopXl} {
        bottom: initial;
        top: 240px;
        right: 220px;
        flex-direction: column;
    }

    @media ${Device.desktop} {
        bottom: initial;
        top: 240px;
        right: 260px;
        flex-direction: column;
    }
`

export default SharingButtons
