import React from "react"

import { Link } from "gatsby"
import Cliboard from "clipboard"
import ReactTooltip from 'react-tooltip';
import Layout from "../components/layout"
import Device from "../components/sizing"
import SEO from "../components/seo"
import EmailSignup from "../components/email-signup"
import styled from "styled-components"
import PrTemplateMdx from "../components/pr-template.mdx"
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";

class PrTemplate extends React.Component {

  componentDidMount() {
    const clipboard = new Cliboard('#copy')
  }
  
  render() {
    const { data } = this.props
    const siteTitle = "Pull Request Template"

    return (
      <Layout location={ this.props.location } title={ siteTitle} >
        <SEO title={ siteTitle } description={ "A pull request template to boost your team's code reviews" } />

        <div>
          <div style={{
            textAlign: "center"
          }}>
            <h1>🚀 Boost your teams' code review practice!</h1>
          </div>

          <hr />
          
          <h2>A great way to help your team's async code review pratice is to outline a set of standard questions and information for each pull request.</h2>
          <h3>And thankfully, this is easy to do with GitHub!</h3>
          <p><Link href="#pr-template">Below</Link> is a pull request template that you can add to your repository to prompt a author to add specific details whenever they open a new PR. </p>
          <p>Simply follow the steps:</p>
          <ul>
            <li>Copy the contents of the markdown file below</li>
            <li>Paste the contents into a file called <code>PULL_REQUEST_TEMPLATE.md</code></li>
            <li>Navigate to your repository</li>
            <li>Move the file into the <code>.github</code> directory (if you don't have one, create it)</li>
          </ul>
          <p><b>🎉 Now every new pull request will prompt the author to fill in the sections of the template!</b></p>
          <p>This template comes right out of the pages in my book: <a href="../book">Code Review Champion</a>. If you want to learn more about how to build a great code review practice on your team, check it out!</p>
          <div style={{ 
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              marginTop: `10px`,
              marginBottom: `40px`
          }}>
          </div>
        </div>

        <hr />

        <PrTemplateWrapper id='pr-template'>
          <PrTemplateContent>

            <CopyButton id="copy" 
              onClick={ () => { ReactTooltip.show(this.copyRef) } }
              data-clipboard-text={ PrTemplateText }>
                
                <Tooltip ref={ref => this.copyRef = ref} 
                  data-offset="{ 'top': 10, 'right': 30 }"
                  data-place="right"
                  data-tip='Copied!'>
                </Tooltip>

                <CopyIcon />

              </CopyButton>
            <PrTemplateMdx />
          </PrTemplateContent>
        </PrTemplateWrapper>

        <ReactTooltip />

      </Layout>      
    )
  }
}

const PrTemplateWrapper =  styled.div`
  position: relative;
  right: 15%;
  width: 130%;
  padding: 12px;
  border-radius: 8px;
  background: #f19066;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
`

const PrTemplateContent = styled.div`
  display: block;
  @media ${Device.tablet} {
    display: flex;
  }

  div {
    width: 100%;
    padding: 5px;
    @media ${Device.tablet} {
      width: 50%;
    }
  }
` 

const CopyButton = styled.button`
    color: rgba(255,255,255,0.45);
    width: 32px;
    height: 32px;
    background-color: inherit;
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    opacity: 40%;
    cursor: pointer;

    &:hover {
      color: rgba(255,255,255);
    }
`

const CopyIcon = styled(BiCopy)`
  color: inherit;
  background-color: inherit;
  width: 100%;
  height: 100%;
`

const Tooltip = styled.span`

`

// Needed for Copy to Clipboard
const PrTemplateText = `
<!--
  Thanks for wanting to contribute to this project!

  To help things move along, provide a description of your changes below and a general summary in the title

  Please look at the following checklist to ensure that your PR can be accepted quickly:
-->

## Description and Context
<!-- Describe your changes in detail and provide helpful context.
<!-- Why is this change required? What problem does it solve? -->
<!-- If it fixes an open issue, please link to the issue here. Other related links are encouraged! -->

## Type of Change:
<!-- What types of changes does your code introduce? Put an \`x\` in all the boxes that apply: -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Refactor / internal changes (changes do not affect functionality, but are an improvement to the codebase)

## Screenshots
<!-- If your changes affect how information is displayed or gathered (especially in a UI, report, or CLI), include a screen shot here --->
<!-- Annotated before and after screenshots are encouraged! --->

## Checklist
<!-- Go over all the following points, and put an \`x\` in all the boxes that apply. -->
- [ ] I added tests to cover my changes
- [ ] All new and existing tests are passing
- [ ] I cleaned up code using
- [ ] I rebased changes with main so that they can be merged easily
- [ ] I have updated the documentation accordingly (if applicable)

<!--
    Thanks for adding all that information! 

    Once you open the PR, go through the code yourself and add any comments in places where additional context or clarity might be helpful to reviewers. 
    If you had a hard time choosing between a few different implementation solutions, provide a little context as to why and what other solutions you considered.

    Thanks for helping us keep a smooth and low-friction code review practice!
-->
`

export default PrTemplate
