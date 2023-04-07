import * as React from "react";
import { Component } from "react";
import styled from "styled-components"

class NewsletterEmail extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://relentless-producer-4085.ck.page/4e590796f5/index.js";
    script.async = true;
    script.setAttribute("data-uid", "4e590796f5");
    this.instance.appendChild(script);
  }

  render() {
    return (
      <Signup>
        <div ref={(el) => (this.instance = el)}></div>
      </Signup>
    );
  }
}

const Signup = styled.div`
    .formkit-form {
      max-width: 2000px !important;
    }

    .formkit-powered-by-convertkit-container {
        display: none !important;
    }
`

export default NewsletterEmail;