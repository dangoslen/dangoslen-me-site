import React from "react"
import styled from "styled-components"


const EmailSignup = props => (
    <EmailWrapper>
        <div style={{ display: `flex`,          
            alignItems: `center`,
            justifyContent: `center`,
            width: `100%`
        }} >
            <div style={{ textAlign: `center`, marginBottom: `7px` }}>Never miss an update from me!</div>
        </div>
        <form action="https://gumroad.com/follow_from_embed_form" method="post"> 
            <input name="seller_id" type="hidden" value="1354486934874" /> 
            <input name="email" placeholder="Your email address" type="email" /> 
            <button data-custom-highlight-color="" type="submit">Follow</button> 
        </form>
    </EmailWrapper>
) 

const EmailWrapper = styled.div`
     zoom: 1; 
     width: 400px;
     
     :before, :after { 
         display: table; 
         line-height: 0; 
         content: ""; 
    } 
    
    :after { 
        clear: both; 
    } 
    
    * { 
        margin: 0; 
        border: 0; 
        padding: 0; 
        outline: 0; 
        box-sizing: 
        border-box !important; float: left !important; 
    } 
    
    input { 
        border-radius: 4px; 
        border-top-right-radius: 0; 
        border-bottom-right-radius: 0; 
        font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif; 
        font-size: 15px; 
        line-height: 20px; 
        background: #fff; 
        border: 1px solid #ddd; 
        border-right: 0; 
        color: #aaa; 
        padding: 10px; 
        box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.02); 
        background-position: top right; 
        background-repeat: no-repeat; 
        text-rendering: optimizeLegibility; 
        font-smoothing: antialiased; 
        -webkit-appearance: none; 
        -moz-appearance: caret; 
        width: 300px !important; 
        height: 40px !important; 
    } 
    
    button { 
        border-radius: 4px; 
        border-top-left-radius: 0; 
        border-bottom-left-radius: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12); 
        -webkit-transition: all .05s ease-in-out; 
        transition: all .05s ease-in-out; 
        display: inline-block; 
        padding: 11px 15px 12px; 
        cursor: pointer; 
        color: #fff; 
        font-size: 15px; 
        line-height: 100%; 
        font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif; 
        background: #f19066; 
        border: 1px solid #d9825c; 
        filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#f19066, endColorstr=#df855e, GradientType=0)"; 
        background: -webkit-linear-gradient(#f19066, #df855e); 
        background: linear-gradient(to bottom, #f19066, #df855e); 
        height: 40px !important; 
        width: 100px !important; 
    }
` 

export default EmailSignup
