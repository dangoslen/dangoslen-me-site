import * as React from "react";
import { Component } from "react";
import styled from "styled-components"

class BookEmail extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://relentless-producer-4085.ck.page/ea9d9238f2/index.js";
    script.async = true;
    script.setAttribute("data-uid", "ea9d9238f2");
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
    .formkit-powered-by-convertkit-container {
        display: none !important;
    }
`

export default BookEmail;