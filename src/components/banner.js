import React, { useEffect, useState } from "react"
import { Link } from "gatsby";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline"
import styled from "styled-components";

const Banner = props => {

    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          const localDismissed = localStorage.getItem(props.name)
          if (!localDismissed && !window.location.pathname.includes(props.link)) {
            setIsVisible(true)
          }
        }, (props.delay * 1000) || 2000);
        return () => clearTimeout(timer);
      }, []);

    const handleDismiss = () => {
        localStorage.setItem(props.name, true)
        setIsVisible(false);
    };

    return (
        <BannerContainer style={{ ...(isVisible && { top: 0 } )}}>
            <BannerNotification style={{background: props.color || 'green' }}>
                <BannerText style={{ marginRight: `5px` }}>{ props.text}</BannerText>
                <Link to={ props.link } style={{  color: `hsl(0deg 0% 0% / 90%)` }} onClick={ handleDismiss } >
                    <BannerText>{ props.cta }</BannerText>
                </Link>
                <BannerCloser onClick={ handleDismiss }><TiDeleteOutline fontSize={`22px`}/></BannerCloser>
            </BannerNotification>
        </BannerContainer>
    );
}

const BannerContainer = styled.div`
    width: 100%;
    position: fixed;
    z-index: 100;
    top: -1000px;
    transition: 0.6s;
    transition-timing-function: ease;
`

const BannerNotification  = styled.div`
    padding: 40px 0px;
    text-align: center;
    box-shadow: grey 0px 0px 14px 11px
`

const BannerText = styled.span`
    display: inline-block;
    font-size: 18px;
`

const BannerCloser = styled.span`
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 12px;
    transition: 0.2s;
    transition-timing-function: ease;

    :hover {
        cursor: pointer; 
        position: relative;
        top: 2px;
    }
`

export default Banner